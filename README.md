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
