const { Router } = require('express');
const createError = require('http-errors');
const { asyncRoute } = require('@parameter1/base-cms-utils');
const { get } = require('@parameter1/base-cms-object-path');
const projectsGraphQLClient = require('../middleware/projects-graphql-client');
const createInput = require('../project-gallery/create-input');

const indexTemplate = require('../templates/project-galleries/index');
const galleryTemplate = require('../templates/project-galleries/gallery');
const projectTemplate = require('../templates/project-galleries/project');

const {
  LIST_QUERY,
  REDIRECT_LOOKUP,
  VIEW_NEXT_BLOCK_QUERY,
  VIEW_QUERY,
} = require('../project-gallery/queries');

const rootSection = {
  name: 'Project Galleries',
  alias: 'project-galleries',
  description: 'Browse architectural and aquatic project galleries and portfolios.',
  hierarchy: [
    { name: 'Project Galleries', alias: 'project-galleries' },
  ],
};

const findRedirectFor = async (client, { type, id }) => {
  const entity = `joomla.athleticbusiness.${type}*${id}`;
  const { data } = await client.query({ query: REDIRECT_LOOKUP, variables: { entity } });
  const { entry } = data;
  if (!entry) throw createError(404, `No project gallery found for legacy ID ${id}`);
  return `/${rootSection.alias}/${entry.type.slug}/${entry.shortId}/${entry.slug}`;
};

const galleries = [
  {
    name: 'Architectural Showcase',
    alias: 'architectural-showcase',
    slug: 'architectural-showcase',
    teaser: 'The best of recently constructed and renovated facilities.',
    description: 'The best of recently constructed and renovated facilities.',
  },
  {
    name: 'Facilities of Merit',
    alias: 'facilities-of-merit',
    slug: 'architectural-showcase',
    teaser: 'Award-winning facilities from the Showcase.',
    description: 'Award-winning facilities from the Showcase.',
  },
  {
    name: 'Aquatic Design Portfolio',
    alias: 'aquatic-design-portfolio',
    slug: 'aquatic-design-portfolio',
    teaser: '',
    description: '',
  },
].map((gallery) => ({
  ...gallery,
  type: gallery.slug.replace(/-/g, '_').toUpperCase(),
  primarySection: {
    name: gallery.name,
    description: gallery.description,
    alias: `${rootSection.alias}/${gallery.alias}`,
    hierarchy: [
      ...rootSection.hierarchy,
      { name: gallery.name, alias: `${rootSection.alias}/${gallery.alias}` },
    ],
  },
}));

const galleryAliases = galleries.map(({ alias }) => alias);

module.exports = (app) => {
  const router = Router();
  const redirects = Router();
  router.use(projectsGraphQLClient());
  redirects.use(projectsGraphQLClient());

  router.get('/', (_, res) => {
    res.marko(indexTemplate, { galleries, primarySection: rootSection });
  });

  router.get(`/:alias(${galleryAliases.join('|')})`, asyncRoute(async (req, res) => {
    const { alias } = req.params;
    const { direction, cursor } = req.query;
    const gallery = galleries.find((g) => g.alias === alias);

    const input = createInput({
      limit: 30,
      gallery,
      direction,
      cursor,
    });

    const variables = { input };
    const { data } = await req.$projectsGraphQL.query({ query: LIST_QUERY, variables });
    res.marko(galleryTemplate, {
      galleries,
      gallery,
      entries: data.entries,
    });
  }));

  router.get(`/:alias(${galleryAliases.join('|')})/:shortId([a-zA-Z0-9]{10})/:slug(*)`, asyncRoute(async (req, res) => {
    const { alias, shortId, slug } = req.params;
    const gallery = galleries.find((g) => g.alias === alias);
    const input = { shortId };

    const { data } = await req.$projectsGraphQL.query({ query: VIEW_QUERY, variables: { input } });
    const { entryByShortId: entry } = data;
    if (!entry) throw createError(404, `No project gallery found for ID ${shortId}`);
    const path = `${entry.shortId}/${entry.slug}`;
    if (path !== `${shortId}/${slug}`) return res.redirect(301, `${req.baseUrl}/${alias}/${path}`);

    const readNext = await req.$projectsGraphQL.query({
      query: VIEW_NEXT_BLOCK_QUERY,
      variables: {
        next: {
          ...createInput({ limit: 1, gallery }),
          excludeIdentifiers: { shortIds: [shortId] },
          publishedAt: { is: 'ON_OR_BEFORE', date: entry.publishedAt },
        },
        previous: {
          ...createInput({ limit: 1, gallery, sortField: 'ASC' }),
          excludeIdentifiers: { shortIds: [shortId] },
          publishedAt: { is: 'ON_OR_AFTER', date: entry.publishedAt },
        },
      },
    });
    const prevProject = get(readNext, 'data.previous.edges.0.node');
    const nextProject = get(readNext, 'data.next.edges.0.node');

    return res.marko(projectTemplate, {
      galleries,
      gallery,
      entry,
      canonicalPath: `${req.baseUrl}/${entry.type.slug}/${path}`,
      prevProject,
      nextProject,
    });
  }));

  redirects.get('/project-:id(\\d+).html', asyncRoute(async (req, res) => {
    const { id } = req.params;
    const to = await findRedirectFor(req.$projectsGraphQL, { id, type: 'abprojects' });
    res.redirect(301, to);
  }));

  redirects.get('/architectural-showcase.html', (_, res) => {
    res.redirect(301, `/${rootSection.alias}`);
  });

  redirects.get('/facilities-of-merit.html', (_, res) => {
    const gallery = galleries.find((g) => g.alias === 'facilities-of-merit');
    res.redirect(301, `/${gallery.primarySection.alias}`);
  });

  redirects.get('/showcase.html', (_, res) => {
    const gallery = galleries.find((g) => g.alias === 'architectural-showcase');
    res.redirect(301, `/${gallery.primarySection.alias}`);
  });

  redirects.get('/adp/project-:id(\\d+).html', asyncRoute(async (req, res) => {
    const { id } = req.params;
    const to = await findRedirectFor(req.$projectsGraphQL, { id, type: 'aquagals' });
    res.redirect(301, to);
  }));

  redirects.get('/adp/showcase.html', (_, res) => {
    const gallery = galleries.find((g) => g.alias === 'aquatic-design-portfolio');
    res.redirect(301, `/${gallery.primarySection.alias}`);
  });

  app.use(`/${rootSection.alias}`, router);
  app.use('/', redirects);
};
