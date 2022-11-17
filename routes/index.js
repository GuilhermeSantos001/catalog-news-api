var express = require('express');
var router = express.Router();

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

router.get('/', async function(req, res, next) {
  try {
    const $response = await newsapi.v2.everything({
      q: 'Tecnologia',
      language: 'pt',
      sortBy: 'publishedAt'
    })

    res.render('index', { title: 'Central de Noticias', articles: $response.articles });
  } catch(error) {
    res.render('error', { message: error.message, error });
  }
});

module.exports = router;
