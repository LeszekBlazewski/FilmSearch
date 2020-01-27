# FilmSearch [![Build Status](https://dev.azure.com/blazewskileszek/FilmSearch/_apis/build/status/LeszekBlazewski.FilmSearch?branchName=master)](https://dev.azure.com/blazewskileszek/FilmSearch/_build/latest?definitionId=16&branchName=master)

Sample SPA application written in Angular which communicates with [OMDb API](http://www.omdbapi.com/).

## Used technologies

* Angular FxLayout

* Angular material

* Reactive forms

* ngx-infinite-scroll

* Animate.css

* ngx-useful-swiper

* ng-starrating

* CI/CD -> Azure DevOps with firebase deployment

## Overview

Application queries the OMDb API in order to retrieve information about requested movies. No one likes pagination these days so infinity scroll was implemented in order to display bigger search results. I have also added component caching mechanism on specific routes in order to prevent fetching the full list when user navigates back and forth between the list and movie details. Also micro reusable components management was introduced to make the app easily maintainable. Application does not fully support responsive design but most of the components are built upon flex layouts and CSS grids so adjustments can be made in order to make it fully usable on smaller devices.

## Live demo

Application is currently deployed right here: [Live demo](https://filmsearch-efb50.firebaseapp.com)

:warning::warning::warning: TO MAKE THE LIVE PRIEVIEW WORK YOU NEED TO ALLOW MIXED CONTENT FOR APP PAGE (because OMDb API does not use https :disappointed:)

### Instructions to allow mixed content on Firefox

1. Navigate to https://filmsearch-efb50.firebaseapp.com

2. Try to search movies by clicking on search button

3. If nothing pops up click on the padlock near site URL on the top

4. Click disable protection for now

![Allow mixed content](/images/mixed-content.png)

5. Enjoy searching :grin:

## Running locally

### Clone the repo

```bash
git clone https://github.com/LeszekBlazewski/FilmSearch.git
```

### Install all dependencies

```
npm install
```

### Serve and have fun

```
ng serve
```

## Continuous  integration and delivery

Continuous  integration is set up to build and deploy new version to firebase each time a new commit in the repo occurs. You can check out how the process was set up here: [Azure DevOps project](https://dev.azure.com/blazewskileszek/FilmSearch) (pipelines and releases :relaxed:)
