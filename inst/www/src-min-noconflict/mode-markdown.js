



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-fcc8785df8e2a851bad4fbb17233e36c34f4e84e6287204b1b15d45940433eb9.css" integrity="sha256-/Mh4XfjiqFG61PuxcjPjbDT06E5ihyBLGxXUWUBDPrk=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-f0f14edf800129ca3c018bc199dd77bd7fc934980ee40ad8975575a6f08e8ec2.css" integrity="sha256-8PFO34ABKco8AYvBmd13vX/JNJgO5ArYl1V1pvCOjsI=" media="all" rel="stylesheet" />
    
    
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-becbb68a5e0ae3f94214b9e9edea2c49974f6d60b9eae715b70e5d017ff1b935.css" integrity="sha256-vsu2il4K4/lCFLnp7eosSZdPbWC56ucVtw5dAX/xuTU=" media="all" rel="stylesheet" />
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-f2534631b1ca6bf10c7effe73f9786cc1fb3426f2674a91519497864b6648282.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-8e0cda42da97a6269d17f304321c8657a34798ca5bd523d8495917753111e0e0.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>markdownapp/mode-markdown.js at master · opencpu/markdownapp · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars1.githubusercontent.com/u/1672525?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="opencpu/markdownapp" name="twitter:title" /><meta content="markdownapp - OpenCPU Markdown App" name="twitter:description" />
      <meta content="https://avatars1.githubusercontent.com/u/1672525?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="opencpu/markdownapp" property="og:title" /><meta content="https://github.com/opencpu/markdownapp" property="og:url" /><meta content="markdownapp - OpenCPU Markdown App" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    
    <meta name="request-id" content="BBB592FD:3D74:13F981A0:57C7263D" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="BBB592FD:3D74:13F981A0:57C7263D" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="MDJiMDU1NWU1YjQwOGU5ZTQ0MmJhYmEwNDU3OTU1MjhhYWRmZGQ4MmRkZGQ3ZmQ5ZTEyZTQ0ZjdiNjU4OGQ5MXx7InJlbW90ZV9hZGRyZXNzIjoiMTg3LjE4MS4xNDYuMjUzIiwicmVxdWVzdF9pZCI6IkJCQjU5MkZEOjNENzQ6MTNGOTgxQTA6NTdDNzI2M0QiLCJ0aW1lc3RhbXAiOjE0NzI2NjkyNTJ9">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="ce52834f08c0069cc322996b5ccf83eafeffe65d">
    <meta content="cd849cb80282f2370e32f76b0f4614bb55374b06" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="983be253dccd6e2da442db71e14b84bf">
    

      
  <meta name="description" content="markdownapp - OpenCPU Markdown App">
  <meta name="go-import" content="github.com/opencpu/markdownapp git https://github.com/opencpu/markdownapp.git">

  <meta content="1672525" name="octolytics-dimension-user_id" /><meta content="opencpu" name="octolytics-dimension-user_login" /><meta content="12436226" name="octolytics-dimension-repository_id" /><meta content="opencpu/markdownapp" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="12436226" name="octolytics-dimension-repository_network_root_id" /><meta content="opencpu/markdownapp" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/opencpu/markdownapp/commits/master.atom" rel="alternate" title="Recent Commits to markdownapp:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/opencpu/markdownapp/blob/master/inst/www/src-min-noconflict/mode-markdown.js" data-pjax-transient>
  </head>


  <body class="logged-out  env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



          <header class="site-header js-details-container" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav site-header-nav-main">
        <a href="/personal" class="js-selected-navigation-item nav-item nav-item-personal" data-ga-click="Header, click, Nav menu - item:personal" data-selected-links="/personal /personal">
          Personal
</a>        <a href="/open-source" class="js-selected-navigation-item nav-item nav-item-opensource" data-ga-click="Header, click, Nav menu - item:opensource" data-selected-links="/open-source /open-source">
          Open source
</a>        <a href="/business" class="js-selected-navigation-item nav-item nav-item-business" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/partners /business/features /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item nav-item-explore" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /explore">
          Explore
</a>      </nav>

      <div class="site-header-actions">
            <a class="btn btn-primary site-header-actions-btn" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
          <a class="btn site-header-actions-btn mr-2" href="/login?return_to=%2Fopencpu%2Fmarkdownapp%2Fblob%2Fmaster%2Finst%2Fwww%2Fsrc-min-noconflict%2Fmode-markdown.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
      </div>

        <nav class="site-header-nav site-header-nav-secondary">
          <a class="nav-item" href="/pricing">Pricing</a>
          <a class="nav-item" href="/blog">Blog</a>
          <a class="nav-item" href="https://help.github.com">Support</a>
          <a class="nav-item header-search-link" href="https://github.com/search">Search GitHub</a>
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/opencpu/markdownapp/search" class="js-site-search-form" data-scoped-search-url="/opencpu/markdownapp/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>

        </nav>
    </div>
  </div>
</header>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fopencpu%2Fmarkdownapp"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
    Watch
  </a>
  <a class="social-count" href="/opencpu/markdownapp/watchers"
     aria-label="2 users are watching this repository">
    2
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fopencpu%2Fmarkdownapp"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/opencpu/markdownapp/stargazers"
      aria-label="10 users starred this repository">
      10
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fopencpu%2Fmarkdownapp"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
        Fork
      </a>

    <a href="/opencpu/markdownapp/network" class="social-count"
       aria-label="10 users are forked this repository">
      10
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/opencpu" class="url fn" rel="author">opencpu</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/opencpu/markdownapp" data-pjax="#js-repo-pjax-container">markdownapp</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/opencpu/markdownapp" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /opencpu/markdownapp" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>


  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/opencpu/markdownapp/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /opencpu/markdownapp/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>




  <a href="/opencpu/markdownapp/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /opencpu/markdownapp/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/opencpu/markdownapp/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /opencpu/markdownapp/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/opencpu/markdownapp/blob/be9bc8a303b7ca984b4de0d384c37a6aa715d2fa/inst/www/src-min-noconflict/mode-markdown.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:5ef931bd9ce446d283daffcdb91ccfc5 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/opencpu/markdownapp/blob/master/inst/www/src-min-noconflict/mode-markdown.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group float-right">
    <a href="/opencpu/markdownapp/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/opencpu/markdownapp"><span>markdownapp</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/opencpu/markdownapp/tree/master/inst"><span>inst</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/opencpu/markdownapp/tree/master/inst/www"><span>www</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/opencpu/markdownapp/tree/master/inst/www/src-min-noconflict"><span>src-min-noconflict</span></a></span><span class="separator">/</span><strong class="final-path">mode-markdown.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/opencpu/markdownapp/contributors/master/inst/www/src-min-noconflict/mode-markdown.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/opencpu/markdownapp/raw/master/inst/www/src-min-noconflict/mode-markdown.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/opencpu/markdownapp/blame/master/inst/www/src-min-noconflict/mode-markdown.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/opencpu/markdownapp/commits/master/inst/www/src-min-noconflict/mode-markdown.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
        </button>
  </div>

  <div class="file-info">
      1 lines (1 sloc)
      <span class="file-info-divider"></span>
    50.1 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">ace.define(&quot;ace/mode/markdown&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/text&quot;,&quot;ace/mode/javascript&quot;,&quot;ace/mode/xml&quot;,&quot;ace/mode/html&quot;,&quot;ace/tokenizer&quot;,&quot;ace/mode/markdown_highlight_rules&quot;,&quot;ace/mode/folding/markdown&quot;],function(e,t,n){var r=e(&quot;../lib/oop&quot;),i=e(&quot;./text&quot;).Mode,s=e(&quot;./javascript&quot;).Mode,o=e(&quot;./xml&quot;).Mode,u=e(&quot;./html&quot;).Mode,a=e(&quot;../tokenizer&quot;).Tokenizer,f=e(&quot;./markdown_highlight_rules&quot;).MarkdownHighlightRules,l=e(&quot;./folding/markdown&quot;).FoldMode,c=function(){var e=new f;this.$tokenizer=new a(e.getRules()),this.$embeds=e.getEmbeds(),this.createModeDelegates({&quot;js-&quot;:s,&quot;xml-&quot;:o,&quot;html-&quot;:u}),this.foldingRules=new l};r.inherits(c,i),function(){this.lineCommentStart=&quot;&gt;&quot;,this.getNextLineIndent=function(e,t,n){if(e==&quot;listblock&quot;){var r=/^(\s*)(?:([-+*])|(\d+)\.)(\s+)/.exec(t);if(!r)return&quot;&quot;;var i=r[2];return i||(i=parseInt(r[3],10)+1+&quot;.&quot;),r[1]+i+r[4]}return this.$getIndent(t)}}.call(c.prototype),t.Mode=c}),ace.define(&quot;ace/mode/javascript&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/text&quot;,&quot;ace/tokenizer&quot;,&quot;ace/mode/javascript_highlight_rules&quot;,&quot;ace/mode/matching_brace_outdent&quot;,&quot;ace/range&quot;,&quot;ace/worker/worker_client&quot;,&quot;ace/mode/behaviour/cstyle&quot;,&quot;ace/mode/folding/cstyle&quot;],function(e,t,n){var r=e(&quot;../lib/oop&quot;),i=e(&quot;./text&quot;).Mode,s=e(&quot;../tokenizer&quot;).Tokenizer,o=e(&quot;./javascript_highlight_rules&quot;).JavaScriptHighlightRules,u=e(&quot;./matching_brace_outdent&quot;).MatchingBraceOutdent,a=e(&quot;../range&quot;).Range,f=e(&quot;../worker/worker_client&quot;).WorkerClient,l=e(&quot;./behaviour/cstyle&quot;).CstyleBehaviour,c=e(&quot;./folding/cstyle&quot;).FoldMode,h=function(){var e=new o;this.$tokenizer=new s(e.getRules()),this.$outdent=new u,this.$behaviour=new l,this.$keywordList=e.$keywordList,this.foldingRules=new c};r.inherits(h,i),function(){this.lineCommentStart=&quot;//&quot;,this.blockComment={start:&quot;/*&quot;,end:&quot;*/&quot;},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.$tokenizer.getLineTokens(t,e),s=i.tokens,o=i.state;if(s.length&amp;&amp;s[s.length-1].type==&quot;comment&quot;)return r;if(e==&quot;start&quot;||e==&quot;no_regex&quot;){var u=t.match(/^.*(?:\bcase\b.*\:|[\{\(\[])\s*$/);u&amp;&amp;(r+=n)}else if(e==&quot;doc-start&quot;){if(o==&quot;start&quot;||o==&quot;no_regex&quot;)return&quot;&quot;;var u=t.match(/^\s*(\/?)\*/);u&amp;&amp;(u[1]&amp;&amp;(r+=&quot; &quot;),r+=&quot;* &quot;)}return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new f([&quot;ace&quot;],&quot;ace/mode/javascript_worker&quot;,&quot;JavaScriptWorker&quot;);return t.attachToDocument(e.getDocument()),t.on(&quot;jslint&quot;,function(t){e.setAnnotations(t.data)}),t.on(&quot;terminate&quot;,function(){e.clearAnnotations()}),t}}.call(h.prototype),t.Mode=h}),ace.define(&quot;ace/mode/javascript_highlight_rules&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/doc_comment_highlight_rules&quot;,&quot;ace/mode/text_highlight_rules&quot;],function(e,t,n){var r=e(&quot;../lib/oop&quot;),i=e(&quot;./doc_comment_highlight_rules&quot;).DocCommentHighlightRules,s=e(&quot;./text_highlight_rules&quot;).TextHighlightRules,o=function(){var e=this.createKeywordMapper({&quot;variable.language&quot;:&quot;Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document&quot;,keyword:&quot;const|yield|import|get|set|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static&quot;,&quot;storage.type&quot;:&quot;const|let|var|function&quot;,&quot;constant.language&quot;:&quot;null|Infinity|NaN|undefined&quot;,&quot;support.function&quot;:&quot;alert&quot;,&quot;constant.language.boolean&quot;:&quot;true|false&quot;},&quot;identifier&quot;),t=&quot;case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void&quot;,n=&quot;[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*\\b&quot;,r=&quot;\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)&quot;;this.$rules={no_regex:[{token:&quot;comment&quot;,regex:&quot;\\/\\/&quot;,next:&quot;line_comment&quot;},i.getStartRule(&quot;doc-start&quot;),{token:&quot;comment&quot;,regex:/\/\*/,next:&quot;comment&quot;},{token:&quot;string&quot;,regex:&quot;&#39;(?=.)&quot;,next:&quot;qstring&quot;},{token:&quot;string&quot;,regex:&#39;&quot;(?=.)&#39;,next:&quot;qqstring&quot;},{token:&quot;constant.numeric&quot;,regex:/0[xX][0-9a-fA-F]+\b/},{token:&quot;constant.numeric&quot;,regex:/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/},{token:[&quot;storage.type&quot;,&quot;punctuation.operator&quot;,&quot;support.function&quot;,&quot;punctuation.operator&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;keyword.operator&quot;],regex:&quot;(&quot;+n+&quot;)(\\.)(prototype)(\\.)(&quot;+n+&quot;)(\\s*)(=)&quot;,next:&quot;function_arguments&quot;},{token:[&quot;storage.type&quot;,&quot;punctuation.operator&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;keyword.operator&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(&quot;+n+&quot;)(\\.)(&quot;+n+&quot;)(\\s*)(=)(\\s*)(function)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:[&quot;entity.name.function&quot;,&quot;text&quot;,&quot;keyword.operator&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(&quot;+n+&quot;)(\\s*)(=)(\\s*)(function)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:[&quot;storage.type&quot;,&quot;punctuation.operator&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;keyword.operator&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(&quot;+n+&quot;)(\\.)(&quot;+n+&quot;)(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:[&quot;storage.type&quot;,&quot;text&quot;,&quot;entity.name.function&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(function)(\\s+)(&quot;+n+&quot;)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:[&quot;entity.name.function&quot;,&quot;text&quot;,&quot;punctuation.operator&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(&quot;+n+&quot;)(\\s*)(:)(\\s*)(function)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:[&quot;text&quot;,&quot;text&quot;,&quot;storage.type&quot;,&quot;text&quot;,&quot;paren.lparen&quot;],regex:&quot;(:)(\\s*)(function)(\\s*)(\\()&quot;,next:&quot;function_arguments&quot;},{token:&quot;keyword&quot;,regex:&quot;(?:&quot;+t+&quot;)\\b&quot;,next:&quot;start&quot;},{token:[&quot;punctuation.operator&quot;,&quot;support.function&quot;],regex:/(\.)(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:[&quot;punctuation.operator&quot;,&quot;support.function.dom&quot;],regex:/(\.)(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:[&quot;punctuation.operator&quot;,&quot;support.constant&quot;],regex:/(\.)(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:[&quot;storage.type&quot;,&quot;punctuation.operator&quot;,&quot;support.function.firebug&quot;],regex:/(console)(\.)(warn|info|log|error|time|timeEnd|assert)\b/},{token:e,regex:n},{token:&quot;keyword.operator&quot;,regex:/--|\+\+|[!$%&amp;*+\-~]|===|==|=|!=|!==|&lt;=|&gt;=|&lt;&lt;=|&gt;&gt;=|&gt;&gt;&gt;=|&lt;&gt;|&lt;|&gt;|!|&amp;&amp;|\|\||\?\:|\*=|%=|\+=|\-=|&amp;=|\^=/,next:&quot;start&quot;},{token:&quot;punctuation.operator&quot;,regex:/\?|\:|\,|\;|\./,next:&quot;start&quot;},{token:&quot;paren.lparen&quot;,regex:/[\[({]/,next:&quot;start&quot;},{token:&quot;paren.rparen&quot;,regex:/[\])}]/},{token:&quot;keyword.operator&quot;,regex:/\/=?/,next:&quot;start&quot;},{token:&quot;comment&quot;,regex:/^#!.*$/}],start:[i.getStartRule(&quot;doc-start&quot;),{token:&quot;comment&quot;,regex:&quot;\\/\\*&quot;,next:&quot;comment_regex_allowed&quot;},{token:&quot;comment&quot;,regex:&quot;\\/\\/&quot;,next:&quot;line_comment_regex_allowed&quot;},{token:&quot;string.regexp&quot;,regex:&quot;\\/&quot;,next:&quot;regex&quot;},{token:&quot;text&quot;,regex:&quot;\\s+|^$&quot;,next:&quot;start&quot;},{token:&quot;empty&quot;,regex:&quot;&quot;,next:&quot;no_regex&quot;}],regex:[{token:&quot;regexp.keyword.operator&quot;,regex:&quot;\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)&quot;},{token:&quot;string.regexp&quot;,regex:&quot;/\\w*&quot;,next:&quot;no_regex&quot;},{token:&quot;invalid&quot;,regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:&quot;constant.language.escape&quot;,regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?]/},{token:&quot;constant.language.delimiter&quot;,regex:/\|/},{token:&quot;constant.language.escape&quot;,regex:/\[\^?/,next:&quot;regex_character_class&quot;},{token:&quot;empty&quot;,regex:&quot;$&quot;,next:&quot;no_regex&quot;},{defaultToken:&quot;string.regexp&quot;}],regex_character_class:[{token:&quot;regexp.keyword.operator&quot;,regex:&quot;\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)&quot;},{token:&quot;constant.language.escape&quot;,regex:&quot;]&quot;,next:&quot;regex&quot;},{token:&quot;constant.language.escape&quot;,regex:&quot;-&quot;},{token:&quot;empty&quot;,regex:&quot;$&quot;,next:&quot;no_regex&quot;},{defaultToken:&quot;string.regexp.charachterclass&quot;}],function_arguments:[{token:&quot;variable.parameter&quot;,regex:n},{token:&quot;punctuation.operator&quot;,regex:&quot;[, ]+&quot;},{token:&quot;punctuation.operator&quot;,regex:&quot;$&quot;},{token:&quot;empty&quot;,regex:&quot;&quot;,next:&quot;no_regex&quot;}],comment_regex_allowed:[{token:&quot;comment&quot;,regex:&quot;\\*\\/&quot;,next:&quot;start&quot;},{defaultToken:&quot;comment&quot;}],comment:[{token:&quot;comment&quot;,regex:&quot;\\*\\/&quot;,next:&quot;no_regex&quot;},{defaultToken:&quot;comment&quot;}],line_comment_regex_allowed:[{token:&quot;comment&quot;,regex:&quot;$|^&quot;,next:&quot;start&quot;},{defaultToken:&quot;comment&quot;}],line_comment:[{token:&quot;comment&quot;,regex:&quot;$|^&quot;,next:&quot;no_regex&quot;},{defaultToken:&quot;comment&quot;}],qqstring:[{token:&quot;constant.language.escape&quot;,regex:r},{token:&quot;string&quot;,regex:&quot;\\\\$&quot;,next:&quot;qqstring&quot;},{token:&quot;string&quot;,regex:&#39;&quot;|$&#39;,next:&quot;no_regex&quot;},{defaultToken:&quot;string&quot;}],qstring:[{token:&quot;constant.language.escape&quot;,regex:r},{token:&quot;string&quot;,regex:&quot;\\\\$&quot;,next:&quot;qstring&quot;},{token:&quot;string&quot;,regex:&quot;&#39;|$&quot;,next:&quot;no_regex&quot;},{defaultToken:&quot;string&quot;}]},this.embedRules(i,&quot;doc-&quot;,[i.getEndRule(&quot;no_regex&quot;)])};r.inherits(o,s),t.JavaScriptHighlightRules=o}),ace.define(&quot;ace/mode/doc_comment_highlight_rules&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/text_highlight_rules&quot;],function(e,t,n){var r=e(&quot;../lib/oop&quot;),i=e(&quot;./text_highlight_rules&quot;).TextHighlightRules,s=function(){this.$rules={start:[{token:&quot;comment.doc.tag&quot;,regex:&quot;@[\\w\\d_]+&quot;},{token:&quot;comment.doc.tag&quot;,regex:&quot;\\bTODO\\b&quot;},{defaultToken:&quot;comment.doc&quot;}]}};r.inherits(s,i),s.getStartRule=function(e){return{token:&quot;comment.doc&quot;,regex:&quot;\\/\\*(?=\\*)&quot;,next:e}},s.getEndRule=function(e){return{token:&quot;comment.doc&quot;,regex:&quot;\\*\\/&quot;,next:e}},t.DocCommentHighlightRules=s}),ace.define(&quot;ace/mode/matching_brace_outdent&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/range&quot;],function(e,t,n){var r=e(&quot;../range&quot;).Range,i=function(){};(function(){this.checkOutdent=function(e,t){return/^\s+$/.test(e)?/^\s*\}/.test(t):!1},this.autoOutdent=function(e,t){var n=e.getLine(t),i=n.match(/^(\s*\})/);if(!i)return 0;var s=i[1].length,o=e.findMatchingBracket({row:t,column:s});if(!o||o.row==t)return 0;var u=this.$getIndent(e.getLine(o.row));e.replace(new r(t,0,t,s-1),u)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i}),ace.define(&quot;ace/mode/behaviour/cstyle&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/behaviour&quot;,&quot;ace/token_iterator&quot;,&quot;ace/lib/lang&quot;],function(e,t,n){var r=e(&quot;../../lib/oop&quot;),i=e(&quot;../behaviour&quot;).Behaviour,s=e(&quot;../../token_iterator&quot;).TokenIterator,o=e(&quot;../../lib/lang&quot;),u=[&quot;text&quot;,&quot;paren.rparen&quot;,&quot;punctuation.operator&quot;],a=[&quot;text&quot;,&quot;paren.rparen&quot;,&quot;punctuation.operator&quot;,&quot;comment&quot;],f=0,l=-1,c=&quot;&quot;,h=0,p=-1,d=&quot;&quot;,v=&quot;&quot;,m=function(){m.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),r=new s(t,n.row,n.column);if(!this.$matchTokenType(r.getCurrentToken()||&quot;text&quot;,u)){var i=new s(t,n.row,n.column+1);if(!this.$matchTokenType(i.getCurrentToken()||&quot;text&quot;,u))return!1}return r.stepForward(),r.getCurrentTokenRow()!==n.row||this.$matchTokenType(r.getCurrentToken()||&quot;text&quot;,a)},m.$matchTokenType=function(e,t){return t.indexOf(e.type||e)&gt;-1},m.recordAutoInsert=function(e,t,n){var r=e.getCursorPosition(),i=t.doc.getLine(r.row);this.isAutoInsertedClosing(r,i,c[0])||(f=0),l=r.row,c=n+i.substr(r.column),f++},m.recordMaybeInsert=function(e,t,n){var r=e.getCursorPosition(),i=t.doc.getLine(r.row);this.isMaybeInsertedClosing(r,i)||(h=0),p=r.row,d=i.substr(0,r.column)+n,v=i.substr(r.column),h++},m.isAutoInsertedClosing=function(e,t,n){return f&gt;0&amp;&amp;e.row===l&amp;&amp;n===c[0]&amp;&amp;t.substr(e.column)===c},m.isMaybeInsertedClosing=function(e,t){return h&gt;0&amp;&amp;e.row===p&amp;&amp;t.substr(e.column)===v&amp;&amp;t.substr(0,e.column)==d},m.popAutoInsertedClosing=function(){c=c.substr(1),f--},m.clearMaybeInsertedClosing=function(){h=0,p=-1},this.add(&quot;braces&quot;,&quot;insertion&quot;,function(e,t,n,r,i){var s=n.getCursorPosition(),u=r.doc.getLine(s.row);if(i==&quot;{&quot;){var a=n.getSelectionRange(),f=r.doc.getTextRange(a);if(f!==&quot;&quot;&amp;&amp;f!==&quot;{&quot;&amp;&amp;n.getWrapBehavioursEnabled())return{text:&quot;{&quot;+f+&quot;}&quot;,selection:!1};if(m.isSaneInsertion(n,r))return/[\]\}\)]/.test(u[s.column])?(m.recordAutoInsert(n,r,&quot;}&quot;),{text:&quot;{}&quot;,selection:[1,1]}):(m.recordMaybeInsert(n,r,&quot;{&quot;),{text:&quot;{&quot;,selection:[1,1]})}else if(i==&quot;}&quot;){var l=u.substring(s.column,s.column+1);if(l==&quot;}&quot;){var c=r.$findOpeningBracket(&quot;}&quot;,{column:s.column+1,row:s.row});if(c!==null&amp;&amp;m.isAutoInsertedClosing(s,u,i))return m.popAutoInsertedClosing(),{text:&quot;&quot;,selection:[1,1]}}}else if(i==&quot;\n&quot;||i==&quot;\r\n&quot;){var p=&quot;&quot;;m.isMaybeInsertedClosing(s,u)&amp;&amp;(p=o.stringRepeat(&quot;}&quot;,h),m.clearMaybeInsertedClosing());var l=u.substring(s.column,s.column+1);if(l==&quot;}&quot;||p!==&quot;&quot;){var d=r.findMatchingBracket({row:s.row,column:s.column},&quot;}&quot;);if(!d)return null;var v=this.getNextLineIndent(e,u.substring(0,s.column),r.getTabString()),g=this.$getIndent(u);return{text:&quot;\n&quot;+v+&quot;\n&quot;+g+p,selection:[1,v.length,1,v.length]}}}}),this.add(&quot;braces&quot;,&quot;deletion&quot;,function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&amp;&amp;s==&quot;{&quot;){var o=r.doc.getLine(i.start.row),u=o.substring(i.end.column,i.end.column+1);if(u==&quot;}&quot;)return i.end.column++,i;h--}}),this.add(&quot;parens&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i==&quot;(&quot;){var s=n.getSelectionRange(),o=r.doc.getTextRange(s);if(o!==&quot;&quot;&amp;&amp;n.getWrapBehavioursEnabled())return{text:&quot;(&quot;+o+&quot;)&quot;,selection:!1};if(m.isSaneInsertion(n,r))return m.recordAutoInsert(n,r,&quot;)&quot;),{text:&quot;()&quot;,selection:[1,1]}}else if(i==&quot;)&quot;){var u=n.getCursorPosition(),a=r.doc.getLine(u.row),f=a.substring(u.column,u.column+1);if(f==&quot;)&quot;){var l=r.$findOpeningBracket(&quot;)&quot;,{column:u.column+1,row:u.row});if(l!==null&amp;&amp;m.isAutoInsertedClosing(u,a,i))return m.popAutoInsertedClosing(),{text:&quot;&quot;,selection:[1,1]}}}}),this.add(&quot;parens&quot;,&quot;deletion&quot;,function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&amp;&amp;s==&quot;(&quot;){var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u==&quot;)&quot;)return i.end.column++,i}}),this.add(&quot;brackets&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i==&quot;[&quot;){var s=n.getSelectionRange(),o=r.doc.getTextRange(s);if(o!==&quot;&quot;&amp;&amp;n.getWrapBehavioursEnabled())return{text:&quot;[&quot;+o+&quot;]&quot;,selection:!1};if(m.isSaneInsertion(n,r))return m.recordAutoInsert(n,r,&quot;]&quot;),{text:&quot;[]&quot;,selection:[1,1]}}else if(i==&quot;]&quot;){var u=n.getCursorPosition(),a=r.doc.getLine(u.row),f=a.substring(u.column,u.column+1);if(f==&quot;]&quot;){var l=r.$findOpeningBracket(&quot;]&quot;,{column:u.column+1,row:u.row});if(l!==null&amp;&amp;m.isAutoInsertedClosing(u,a,i))return m.popAutoInsertedClosing(),{text:&quot;&quot;,selection:[1,1]}}}}),this.add(&quot;brackets&quot;,&quot;deletion&quot;,function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&amp;&amp;s==&quot;[&quot;){var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u==&quot;]&quot;)return i.end.column++,i}}),this.add(&quot;string_dquotes&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i==&#39;&quot;&#39;||i==&quot;&#39;&quot;){var s=i,o=n.getSelectionRange(),u=r.doc.getTextRange(o);if(u!==&quot;&quot;&amp;&amp;u!==&quot;&#39;&quot;&amp;&amp;u!=&#39;&quot;&#39;&amp;&amp;n.getWrapBehavioursEnabled())return{text:s+u+s,selection:!1};var a=n.getCursorPosition(),f=r.doc.getLine(a.row),l=f.substring(a.column-1,a.column);if(l==&quot;\\&quot;)return null;var c=r.getTokens(o.start.row),h=0,p,d=-1;for(var v=0;v&lt;c.length;v++){p=c[v],p.type==&quot;string&quot;?d=-1:d&lt;0&amp;&amp;(d=p.value.indexOf(s));if(p.value.length+h&gt;o.start.column)break;h+=c[v].value.length}if(!p||d&lt;0&amp;&amp;p.type!==&quot;comment&quot;&amp;&amp;(p.type!==&quot;string&quot;||o.start.column!==p.value.length+h-1&amp;&amp;p.value.lastIndexOf(s)===p.value.length-1)){if(!m.isSaneInsertion(n,r))return;return{text:s+s,selection:[1,1]}}if(p&amp;&amp;p.type===&quot;string&quot;){var g=f.substring(a.column,a.column+1);if(g==s)return{text:&quot;&quot;,selection:[1,1]}}}}),this.add(&quot;string_dquotes&quot;,&quot;deletion&quot;,function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&amp;&amp;(s==&#39;&quot;&#39;||s==&quot;&#39;&quot;)){var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u==s)return i.end.column++,i}})};r.inherits(m,i),t.CstyleBehaviour=m}),ace.define(&quot;ace/mode/folding/cstyle&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/range&quot;,&quot;ace/mode/folding/fold_mode&quot;],function(e,t,n){var r=e(&quot;../../lib/oop&quot;),i=e(&quot;../../range&quot;).Range,s=e(&quot;./fold_mode&quot;).FoldMode,o=t.FoldMode=function(e){e&amp;&amp;(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,&quot;|&quot;+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,&quot;|&quot;+e.end)))};r.inherits(o,s),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(e,t,n){var r=e.getLine(n),i=r.match(this.foldingStartMarker);if(i){var s=i.index;return i[1]?this.openingBracketBlock(e,i[1],n,s):e.getCommentFoldRange(n,s+i[0].length,1)}if(t!==&quot;markbeginend&quot;)return;var i=r.match(this.foldingStopMarker);if(i){var s=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],n,s):e.getCommentFoldRange(n,s,-1)}}}.call(o.prototype)}),ace.define(&quot;ace/mode/xml&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/text&quot;,&quot;ace/tokenizer&quot;,&quot;ace/mode/xml_highlight_rules&quot;,&quot;ace/mode/behaviour/xml&quot;,&quot;ace/mode/folding/xml&quot;],function(e,t,n){var r=e(&quot;../lib/oop&quot;),i=e(&quot;./text&quot;).Mode,s=e(&quot;../tokenizer&quot;).Tokenizer,o=e(&quot;./xml_highlight_rules&quot;).XmlHighlightRules,u=e(&quot;./behaviour/xml&quot;).XmlBehaviour,a=e(&quot;./folding/xml&quot;).FoldMode,f=function(){this.$tokenizer=new s((new o).getRules()),this.$behaviour=new u,this.foldingRules=new a};r.inherits(f,i),function(){this.blockComment={start:&quot;&lt;!--&quot;,end:&quot;--&gt;&quot;}}.call(f.prototype),t.Mode=f}),ace.define(&quot;ace/mode/xml_highlight_rules&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/xml_util&quot;,&quot;ace/mode/text_highlight_rules&quot;],function(e,t,n){var r=e(&quot;../lib/oop&quot;),i=e(&quot;./xml_util&quot;),s=e(&quot;./text_highlight_rules&quot;).TextHighlightRules,o=function(e){this.$rules={start:[{token:&quot;punctuation.string.begin&quot;,regex:&quot;&lt;\\!\\[CDATA\\[&quot;,next:&quot;cdata&quot;},{token:[&quot;punctuation.instruction.begin&quot;,&quot;keyword.instruction&quot;],regex:&quot;(&lt;\\?)(xml)(?=[\\s])&quot;,next:&quot;xml_declaration&quot;},{token:[&quot;punctuation.instruction.begin&quot;,&quot;keyword.instruction&quot;],regex:&quot;(&lt;\\?)([-_a-zA-Z0-9]+)&quot;,next:&quot;instruction&quot;},{token:&quot;comment&quot;,regex:&quot;&lt;\\!--&quot;,next:&quot;comment&quot;},{token:[&quot;punctuation.doctype.begin&quot;,&quot;meta.tag.doctype&quot;],regex:&quot;(&lt;\\!)(DOCTYPE)(?=[\\s])&quot;,next:&quot;doctype&quot;},{include:&quot;tag&quot;},{include:&quot;reference&quot;}],xml_declaration:[{include:&quot;attributes&quot;},{include:&quot;instruction&quot;}],instruction:[{token:&quot;punctuation.instruction.end&quot;,regex:&quot;\\?&gt;&quot;,next:&quot;start&quot;}],doctype:[{include:&quot;space&quot;},{include:&quot;string&quot;},{token:&quot;punctuation.doctype.end&quot;,regex:&quot;&gt;&quot;,next:&quot;start&quot;},{token:&quot;xml-pe&quot;,regex:&quot;[-_a-zA-Z0-9:]+&quot;},{token:&quot;punctuation.begin&quot;,regex:&quot;\\[&quot;,push:&quot;declarations&quot;}],declarations:[{token:&quot;text&quot;,regex:&quot;\\s+&quot;},{token:&quot;punctuation.end&quot;,regex:&quot;]&quot;,next:&quot;pop&quot;},{token:[&quot;punctuation.begin&quot;,&quot;keyword&quot;],regex:&quot;(&lt;\\!)([-_a-zA-Z0-9]+)&quot;,push:[{token:&quot;text&quot;,regex:&quot;\\s+&quot;},{token:&quot;punctuation.end&quot;,regex:&quot;&gt;&quot;,next:&quot;pop&quot;},{include:&quot;string&quot;}]}],cdata:[{token:&quot;string.end&quot;,regex:&quot;\\]\\]&gt;&quot;,next:&quot;start&quot;},{token:&quot;text&quot;,regex:&quot;\\s+&quot;},{token:&quot;text&quot;,regex:&quot;(?:[^\\]]|\\](?!\\]&gt;))+&quot;}],comment:[{token:&quot;comment&quot;,regex:&quot;--&gt;&quot;,next:&quot;start&quot;},{defaultToken:&quot;comment&quot;}],tag:[{token:[&quot;meta.tag.punctuation.begin&quot;,&quot;meta.tag.name&quot;],regex:&quot;(&lt;)((?:[-_a-zA-Z0-9]+:)?[-_a-zA-Z0-9]+)&quot;,next:[{include:&quot;attributes&quot;},{token:&quot;meta.tag.punctuation.end&quot;,regex:&quot;/?&gt;&quot;,next:&quot;start&quot;}]},{token:[&quot;meta.tag.punctuation.begin&quot;,&quot;meta.tag.name&quot;],regex:&quot;(&lt;/)((?:[-_a-zA-Z0-9]+:)?[-_a-zA-Z0-9]+)&quot;,next:[{include:&quot;space&quot;},{token:&quot;meta.tag.punctuation.end&quot;,regex:&quot;&gt;&quot;,next:&quot;start&quot;}]}],space:[{token:&quot;text&quot;,regex:&quot;\\s+&quot;}],reference:[{token:&quot;constant.language.escape&quot;,regex:&quot;(?:&amp;#[0-9]+;)|(?:&amp;#x[0-9a-fA-F]+;)|(?:&amp;[a-zA-Z0-9_:\\.-]+;)&quot;},{token:&quot;invalid.illegal&quot;,regex:&quot;&amp;&quot;}],string:[{token:&quot;string&quot;,regex:&quot;&#39;&quot;,push:&quot;qstring_inner&quot;},{token:&quot;string&quot;,regex:&#39;&quot;&#39;,push:&quot;qqstring_inner&quot;}],qstring_inner:[{token:&quot;string&quot;,regex:&quot;&#39;&quot;,next:&quot;pop&quot;},{include:&quot;reference&quot;},{defaultToken:&quot;string&quot;}],qqstring_inner:[{token:&quot;string&quot;,regex:&#39;&quot;&#39;,next:&quot;pop&quot;},{include:&quot;reference&quot;},{defaultToken:&quot;string&quot;}],attributes:[{token:&quot;entity.other.attribute-name&quot;,regex:&quot;(?:[-_a-zA-Z0-9]+:)?[-_a-zA-Z0-9]+&quot;},{token:&quot;keyword.operator.separator&quot;,regex:&quot;=&quot;},{include:&quot;space&quot;},{include:&quot;string&quot;}]},this.constructor===o&amp;&amp;this.normalizeRules()};(function(){this.embedTagRules=function(e,t,n){this.$rules.tag.unshift({token:[&quot;meta.tag.punctuation.begin&quot;,&quot;meta.tag.name.&quot;+n],regex:&quot;(&lt;)(&quot;+n+&quot;)&quot;,next:[{include:&quot;space&quot;},{include:&quot;attributes&quot;},{token:&quot;meta.tag.punctuation.end&quot;,regex:&quot;/?&gt;&quot;,next:t+&quot;start&quot;}]}),this.$rules[n+&quot;-end&quot;]=[{include:&quot;space&quot;},{token:&quot;meta.tag.punctuation.end&quot;,regex:&quot;&gt;&quot;,next:&quot;start&quot;,onMatch:function(e,t,n){return n.splice(0),this.token}}],this.embedRules(e,t,[{token:[&quot;meta.tag.punctuation.begin&quot;,&quot;meta.tag.name.&quot;+n],regex:&quot;(&lt;/)(&quot;+n+&quot;)&quot;,next:n+&quot;-end&quot;},{token:&quot;string.begin&quot;,regex:&quot;&lt;\\!\\[CDATA\\[&quot;},{token:&quot;string.end&quot;,regex:&quot;\\]\\]&gt;&quot;}])}}).call(s.prototype),r.inherits(o,s),t.XmlHighlightRules=o}),ace.define(&quot;ace/mode/xml_util&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;],function(e,t,n){function r(e){return[{token:&quot;string&quot;,regex:&#39;&quot;&#39;,next:e+&quot;_qqstring&quot;},{token:&quot;string&quot;,regex:&quot;&#39;&quot;,next:e+&quot;_qstring&quot;}]}function i(e,t){return[{token:&quot;string&quot;,regex:e,next:t},{token:&quot;constant.language.escape&quot;,regex:&quot;(?:&amp;#[0-9]+;)|(?:&amp;#x[0-9a-fA-F]+;)|(?:&amp;[a-zA-Z0-9_:\\.-]+;)&quot;},{defaultToken:&quot;string&quot;}]}t.tag=function(e,t,n,s){e[t]=[{token:&quot;text&quot;,regex:&quot;\\s+&quot;},{token:s?function(e){return s[e]?&quot;meta.tag.tag-name.&quot;+s[e]:&quot;meta.tag.tag-name&quot;}:&quot;meta.tag.tag-name&quot;,regex:&quot;[-_a-zA-Z0-9:]+&quot;,next:t+&quot;_embed_attribute_list&quot;},{token:&quot;empty&quot;,regex:&quot;&quot;,next:t+&quot;_embed_attribute_list&quot;}],e[t+&quot;_qstring&quot;]=i(&quot;&#39;&quot;,t+&quot;_embed_attribute_list&quot;),e[t+&quot;_qqstring&quot;]=i(&#39;&quot;&#39;,t+&quot;_embed_attribute_list&quot;),e[t+&quot;_embed_attribute_list&quot;]=[{token:&quot;meta.tag.r&quot;,regex:&quot;/?&gt;&quot;,next:n},{token:&quot;keyword.operator&quot;,regex:&quot;=&quot;},{token:&quot;entity.other.attribute-name&quot;,regex:&quot;[-_a-zA-Z0-9:]+&quot;},{token:&quot;constant.numeric&quot;,regex:&quot;[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b&quot;},{token:&quot;text&quot;,regex:&quot;\\s+&quot;}].concat(r(t))}}),ace.define(&quot;ace/mode/behaviour/xml&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/behaviour&quot;,&quot;ace/mode/behaviour/cstyle&quot;,&quot;ace/token_iterator&quot;],function(e,t,n){function u(e,t){var n=e.type.split(&quot;.&quot;);return t.split(&quot;.&quot;).every(function(e){return n.indexOf(e)!==-1})}var r=e(&quot;../../lib/oop&quot;),i=e(&quot;../behaviour&quot;).Behaviour,s=e(&quot;./cstyle&quot;).CstyleBehaviour,o=e(&quot;../../token_iterator&quot;).TokenIterator,a=function(){this.inherit(s,[&quot;string_dquotes&quot;]),this.add(&quot;autoclosing&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i==&quot;&gt;&quot;){var s=n.getCursorPosition(),a=new o(r,s.row,s.column),f=a.getCurrentToken();if(f&amp;&amp;u(f,&quot;string&quot;)&amp;&amp;a.getCurrentTokenColumn()+f.value.length&gt;s.column)return;var l=!1;if(!f||!u(f,&quot;meta.tag&quot;)&amp;&amp;(!u(f,&quot;text&quot;)||!f.value.match(&quot;/&quot;))){do f=a.stepBackward();while(f&amp;&amp;(u(f,&quot;string&quot;)||u(f,&quot;keyword.operator&quot;)||u(f,&quot;entity.attribute-name&quot;)||u(f,&quot;text&quot;)))}else l=!0;if(!f||!u(f,&quot;meta.tag.name&quot;)||a.stepBackward().value.match(&quot;/&quot;))return;var c=f.value;if(l)var c=c.substring(0,s.column-f.start);return{text:&quot;&gt;&lt;/&quot;+c+&quot;&gt;&quot;,selection:[1,1]}}}),this.add(&quot;autoindent&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i==&quot;\n&quot;){var s=n.getCursorPosition(),o=r.getLine(s.row),u=o.substring(s.column,s.column+2);if(u==&quot;&lt;/&quot;){var a=this.$getIndent(o),f=a+r.getTabString();return{text:&quot;\n&quot;+f+&quot;\n&quot;+a,selection:[1,f.length,1,f.length]}}}})};r.inherits(a,i),t.XmlBehaviour=a}),ace.define(&quot;ace/mode/folding/xml&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/lib/lang&quot;,&quot;ace/range&quot;,&quot;ace/mode/folding/fold_mode&quot;,&quot;ace/token_iterator&quot;],function(e,t,n){var r=e(&quot;../../lib/oop&quot;),i=e(&quot;../../lib/lang&quot;),s=e(&quot;../../range&quot;).Range,o=e(&quot;./fold_mode&quot;).FoldMode,u=e(&quot;../../token_iterator&quot;).TokenIterator,a=t.FoldMode=function(e){o.call(this),this.voidElements=e||{}};r.inherits(a,o),function(){this.getFoldWidget=function(e,t,n){var r=this._getFirstTagInLine(e,n);return r.closing?t==&quot;markbeginend&quot;?&quot;end&quot;:&quot;&quot;:!r.tagName||this.voidElements[r.tagName.toLowerCase()]?&quot;&quot;:r.selfClosing?&quot;&quot;:r.value.indexOf(&quot;/&quot;+r.tagName)!==-1?&quot;&quot;:&quot;start&quot;},this._getFirstTagInLine=function(e,t){var n=e.getTokens(t),r=&quot;&quot;;for(var s=0;s&lt;n.length;s++){var o=n[s];o.type.lastIndexOf(&quot;meta.tag&quot;,0)===0?r+=o.value:r+=i.stringRepeat(&quot; &quot;,o.value.length)}return this._parseTag(r)},this.tagRe=/^(\s*)(&lt;?(\/?)([-_a-zA-Z0-9:!]*)\s*(\/?)&gt;?)/,this._parseTag=function(e){var t=e.match(this.tagRe),n=0;return{value:e,match:t?t[2]:&quot;&quot;,closing:t?!!t[3]:!1,selfClosing:t?!!t[5]||t[2]==&quot;/&gt;&quot;:!1,tagName:t?t[4]:&quot;&quot;,column:t[1]?n+t[1].length:n}},this._readTagForward=function(e){var t=e.getCurrentToken();if(!t)return null;var n=&quot;&quot;,r;do if(t.type.lastIndexOf(&quot;meta.tag&quot;,0)===0){if(!r)var r={row:e.getCurrentTokenRow(),column:e.getCurrentTokenColumn()};n+=t.value;if(n.indexOf(&quot;&gt;&quot;)!==-1){var i=this._parseTag(n);return i.start=r,i.end={row:e.getCurrentTokenRow(),column:e.getCurrentTokenColumn()+t.value.length},e.stepForward(),i}}while(t=e.stepForward());return null},this._readTagBackward=function(e){var t=e.getCurrentToken();if(!t)return null;var n=&quot;&quot;,r;do if(t.type.lastIndexOf(&quot;meta.tag&quot;,0)===0){r||(r={row:e.getCurrentTokenRow(),column:e.getCurrentTokenColumn()+t.value.length}),n=t.value+n;if(n.indexOf(&quot;&lt;&quot;)!==-1){var i=this._parseTag(n);return i.end=r,i.start={row:e.getCurrentTokenRow(),column:e.getCurrentTokenColumn()},e.stepBackward(),i}}while(t=e.stepBackward());return null},this._pop=function(e,t){while(e.length){var n=e[e.length-1];if(!t||n.tagName==t.tagName)return e.pop();if(this.voidElements[t.tagName])return;if(this.voidElements[n.tagName]){e.pop();continue}return null}},this.getFoldWidgetRange=function(e,t,n){var r=this._getFirstTagInLine(e,n);if(!r.match)return null;var i=r.closing||r.selfClosing,o=[],a;if(!i){var f=new u(e,n,r.column),l={row:n,column:r.column+r.tagName.length+2};while(a=this._readTagForward(f)){if(a.selfClosing){if(!o.length)return a.start.column+=a.tagName.length+2,a.end.column-=2,s.fromPoints(a.start,a.end);continue}if(a.closing){this._pop(o,a);if(o.length==0)return s.fromPoints(l,a.start)}else o.push(a)}}else{var f=new u(e,n,r.column+r.match.length),c={row:n,column:r.column};while(a=this._readTagBackward(f)){if(a.selfClosing){if(!o.length)return a.start.column+=a.tagName.length+2,a.end.column-=2,s.fromPoints(a.start,a.end);continue}if(!a.closing){this._pop(o,a);if(o.length==0)return a.start.column+=a.tagName.length+2,s.fromPoints(a.start,c)}else o.push(a)}}}}.call(a.prototype)}),ace.define(&quot;ace/mode/html&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/text&quot;,&quot;ace/mode/javascript&quot;,&quot;ace/mode/css&quot;,&quot;ace/tokenizer&quot;,&quot;ace/mode/html_highlight_rules&quot;,&quot;ace/mode/behaviour/html&quot;,&quot;ace/mode/folding/html&quot;],function(e,t,n){var r=e(&quot;../lib/oop&quot;),i=e(&quot;./text&quot;).Mode,s=e(&quot;./javascript&quot;).Mode,o=e(&quot;./css&quot;).Mode,u=e(&quot;../tokenizer&quot;).Tokenizer,a=e(&quot;./html_highlight_rules&quot;).HtmlHighlightRules,f=e(&quot;./behaviour/html&quot;).HtmlBehaviour,l=e(&quot;./folding/html&quot;).FoldMode,c=function(){var e=new a;this.$tokenizer=new u(e.getRules()),this.$behaviour=new f,this.$embeds=e.getEmbeds(),this.createModeDelegates({&quot;js-&quot;:s,&quot;css-&quot;:o}),this.foldingRules=new l};r.inherits(c,i),function(){this.blockComment={start:&quot;&lt;!--&quot;,end:&quot;--&gt;&quot;},this.getNextLineIndent=function(e,t,n){return this.$getIndent(t)},this.checkOutdent=function(e,t,n){return!1}}.call(c.prototype),t.Mode=c}),ace.define(&quot;ace/mode/css&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/text&quot;,&quot;ace/tokenizer&quot;,&quot;ace/mode/css_highlight_rules&quot;,&quot;ace/mode/matching_brace_outdent&quot;,&quot;ace/worker/worker_client&quot;,&quot;ace/mode/behaviour/css&quot;,&quot;ace/mode/folding/cstyle&quot;],function(e,t,n){var r=e(&quot;../lib/oop&quot;),i=e(&quot;./text&quot;).Mode,s=e(&quot;../tokenizer&quot;).Tokenizer,o=e(&quot;./css_highlight_rules&quot;).CssHighlightRules,u=e(&quot;./matching_brace_outdent&quot;).MatchingBraceOutdent,a=e(&quot;../worker/worker_client&quot;).WorkerClient,f=e(&quot;./behaviour/css&quot;).CssBehaviour,l=e(&quot;./folding/cstyle&quot;).FoldMode,c=function(){var e=new o;this.$tokenizer=new s(e.getRules()),this.$outdent=new u,this.$behaviour=new f,this.$keywordList=e.$keywordList,this.foldingRules=new l};r.inherits(c,i),function(){this.foldingRules=&quot;cStyle&quot;,this.blockComment={start:&quot;/*&quot;,end:&quot;*/&quot;},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.$tokenizer.getLineTokens(t,e).tokens;if(i.length&amp;&amp;i[i.length-1].type==&quot;comment&quot;)return r;var s=t.match(/^.*\{\s*$/);return s&amp;&amp;(r+=n),r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.createWorker=function(e){var t=new a([&quot;ace&quot;],&quot;ace/mode/css_worker&quot;,&quot;Worker&quot;);return t.attachToDocument(e.getDocument()),t.on(&quot;csslint&quot;,function(t){e.setAnnotations(t.data)}),t.on(&quot;terminate&quot;,function(){e.clearAnnotations()}),t}}.call(c.prototype),t.Mode=c}),ace.define(&quot;ace/mode/css_highlight_rules&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/lib/lang&quot;,&quot;ace/mode/text_highlight_rules&quot;],function(e,t,n){var r=e(&quot;../lib/oop&quot;),i=e(&quot;../lib/lang&quot;),s=e(&quot;./text_highlight_rules&quot;).TextHighlightRules,o=t.supportType=&quot;animation-fill-mode|alignment-adjust|alignment-baseline|animation-delay|animation-direction|animation-duration|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|animation|appearance|azimuth|backface-visibility|background-attachment|background-break|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|background|baseline-shift|binding|bleed|bookmark-label|bookmark-level|bookmark-state|bookmark-target|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|border|bottom|box-align|box-decoration-break|box-direction|box-flex-group|box-flex|box-lines|box-ordinal-group|box-orient|box-pack|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side|clear|clip|color-profile|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|crop|cue-after|cue-before|cue|cursor|direction|display|dominant-baseline|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust|drop-initial-before-align|drop-initial-size|drop-initial-value|elevation|empty-cells|fit|fit-position|float-offset|float|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|font|grid-columns|grid-rows|hanging-punctuation|height|hyphenate-after|hyphenate-before|hyphenate-character|hyphenate-lines|hyphenate-resource|hyphens|icon|image-orientation|image-rendering|image-resolution|inline-box-align|left|letter-spacing|line-height|line-stacking-ruby|line-stacking-shift|line-stacking-strategy|line-stacking|list-style-image|list-style-position|list-style-type|list-style|margin-bottom|margin-left|margin-right|margin-top|margin|mark-after|mark-before|mark|marks|marquee-direction|marquee-play-count|marquee-speed|marquee-style|max-height|max-width|min-height|min-width|move-to|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|orphans|outline-color|outline-offset|outline-style|outline-width|outline|overflow-style|overflow-x|overflow-y|overflow|padding-bottom|padding-left|padding-right|padding-top|padding|page-break-after|page-break-before|page-break-inside|page-policy|page|pause-after|pause-before|pause|perspective-origin|perspective|phonemes|pitch-range|pitch|play-during|position|presentation-level|punctuation-trim|quotes|rendering-intent|resize|rest-after|rest-before|rest|richness|right|rotation-point|rotation|ruby-align|ruby-overhang|ruby-position|ruby-span|size|speak-header|speak-numeral|speak-punctuation|speak|speech-rate|stress|string-set|table-layout|target-name|target-new|target-position|target|text-align-last|text-align|text-decoration|text-emphasis|text-height|text-indent|text-justify|text-outline|text-shadow|text-transform|text-wrap|top|transform-origin|transform-style|transform|transition-delay|transition-duration|transition-property|transition-timing-function|transition|unicode-bidi|vertical-align|visibility|voice-balance|voice-duration|voice-family|voice-pitch-range|voice-pitch|voice-rate|voice-stress|voice-volume|volume|white-space-collapse|white-space|widows|width|word-break|word-spacing|word-wrap|z-index&quot;,u=t.supportFunction=&quot;rgb|rgba|url|attr|counter|counters&quot;,a=t.supportConstant=&quot;absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero&quot;,f=t.supportConstantColor=&quot;aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow&quot;,l=t.supportConstantFonts=&quot;arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace&quot;,c=t.numRe=&quot;\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))&quot;,h=t.pseudoElements=&quot;(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b&quot;,p=t.pseudoClasses=&quot;(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b&quot;,d=function(){var e=this.createKeywordMapper({&quot;support.function&quot;:u,&quot;support.constant&quot;:a,&quot;support.type&quot;:o,&quot;support.constant.color&quot;:f,&quot;support.constant.fonts&quot;:l},&quot;text&quot;,!0);this.$rules={start:[{token:&quot;comment&quot;,regex:&quot;\\/\\*&quot;,push:&quot;comment&quot;},{token:&quot;paren.lparen&quot;,regex:&quot;\\{&quot;,push:&quot;ruleset&quot;},{token:&quot;string&quot;,regex:&quot;@.*?{&quot;,push:&quot;media&quot;},{token:&quot;keyword&quot;,regex:&quot;#[a-z0-9-_]+&quot;},{token:&quot;variable&quot;,regex:&quot;\\.[a-z0-9-_]+&quot;},{token:&quot;string&quot;,regex:&quot;:[a-z0-9-_]+&quot;},{token:&quot;constant&quot;,regex:&quot;[a-z0-9-_]+&quot;},{caseInsensitive:!0}],media:[{token:&quot;comment&quot;,regex:&quot;\\/\\*&quot;,push:&quot;comment&quot;},{token:&quot;paren.lparen&quot;,regex:&quot;\\{&quot;,push:&quot;ruleset&quot;},{token:&quot;string&quot;,regex:&quot;\\}&quot;,next:&quot;pop&quot;},{token:&quot;keyword&quot;,regex:&quot;#[a-z0-9-_]+&quot;},{token:&quot;variable&quot;,regex:&quot;\\.[a-z0-9-_]+&quot;},{token:&quot;string&quot;,regex:&quot;:[a-z0-9-_]+&quot;},{token:&quot;constant&quot;,regex:&quot;[a-z0-9-_]+&quot;},{caseInsensitive:!0}],comment:[{token:&quot;comment&quot;,regex:&quot;\\*\\/&quot;,next:&quot;pop&quot;},{defaultToken:&quot;comment&quot;}],ruleset:[{token:&quot;paren.rparen&quot;,regex:&quot;\\}&quot;,next:&quot;pop&quot;},{token:&quot;comment&quot;,regex:&quot;\\/\\*&quot;,push:&quot;comment&quot;},{token:&quot;string&quot;,regex:&#39;[&quot;](?:(?:\\\\.)|(?:[^&quot;\\\\]))*?[&quot;]&#39;},{token:&quot;string&quot;,regex:&quot;[&#39;](?:(?:\\\\.)|(?:[^&#39;\\\\]))*?[&#39;]&quot;},{token:[&quot;constant.numeric&quot;,&quot;keyword&quot;],regex:&quot;(&quot;+c+&quot;)(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)&quot;},{token:&quot;constant.numeric&quot;,regex:c},{token:&quot;constant.numeric&quot;,regex:&quot;#[a-f0-9]{6}&quot;},{token:&quot;constant.numeric&quot;,regex:&quot;#[a-f0-9]{3}&quot;},{token:[&quot;punctuation&quot;,&quot;entity.other.attribute-name.pseudo-element.css&quot;],regex:h},{token:[&quot;punctuation&quot;,&quot;entity.other.attribute-name.pseudo-class.css&quot;],regex:p},{token:[&quot;support.function&quot;,&quot;string&quot;,&quot;support.function&quot;],regex:&quot;(url\\()(.*)(\\))&quot;},{token:e,regex:&quot;\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*&quot;},{caseInsensitive:!0}]},this.normalizeRules()};r.inherits(d,s),t.CssHighlightRules=d}),ace.define(&quot;ace/mode/behaviour/css&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/behaviour&quot;,&quot;ace/mode/behaviour/cstyle&quot;,&quot;ace/token_iterator&quot;],function(e,t,n){var r=e(&quot;../../lib/oop&quot;),i=e(&quot;../behaviour&quot;).Behaviour,s=e(&quot;./cstyle&quot;).CstyleBehaviour,o=e(&quot;../../token_iterator&quot;).TokenIterator,u=function(){this.inherit(s),this.add(&quot;colon&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i===&quot;:&quot;){var s=n.getCursorPosition(),u=new o(r,s.row,s.column),a=u.getCurrentToken();a&amp;&amp;a.value.match(/\s+/)&amp;&amp;(a=u.stepBackward());if(a&amp;&amp;a.type===&quot;support.type&quot;){var f=r.doc.getLine(s.row),l=f.substring(s.column,s.column+1);if(l===&quot;:&quot;)return{text:&quot;&quot;,selection:[1,1]};if(!f.substring(s.column).match(/^\s*;/))return{text:&quot;:;&quot;,selection:[1,1]}}}}),this.add(&quot;colon&quot;,&quot;deletion&quot;,function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&amp;&amp;s===&quot;:&quot;){var u=n.getCursorPosition(),a=new o(r,u.row,u.column),f=a.getCurrentToken();f&amp;&amp;f.value.match(/\s+/)&amp;&amp;(f=a.stepBackward());if(f&amp;&amp;f.type===&quot;support.type&quot;){var l=r.doc.getLine(i.start.row),c=l.substring(i.end.column,i.end.column+1);if(c===&quot;;&quot;)return i.end.column++,i}}}),this.add(&quot;semicolon&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i===&quot;;&quot;){var s=n.getCursorPosition(),o=r.doc.getLine(s.row),u=o.substring(s.column,s.column+1);if(u===&quot;;&quot;)return{text:&quot;&quot;,selection:[1,1]}}})};r.inherits(u,s),t.CssBehaviour=u}),ace.define(&quot;ace/mode/html_highlight_rules&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/lib/lang&quot;,&quot;ace/mode/css_highlight_rules&quot;,&quot;ace/mode/javascript_highlight_rules&quot;,&quot;ace/mode/xml_highlight_rules&quot;],function(e,t,n){var r=e(&quot;../lib/oop&quot;),i=e(&quot;../lib/lang&quot;),s=e(&quot;./css_highlight_rules&quot;).CssHighlightRules,o=e(&quot;./javascript_highlight_rules&quot;).JavaScriptHighlightRules,u=e(&quot;./xml_highlight_rules&quot;).XmlHighlightRules,a=i.createMap({a:&quot;anchor&quot;,button:&quot;form&quot;,form:&quot;form&quot;,img:&quot;image&quot;,input:&quot;form&quot;,label:&quot;form&quot;,script:&quot;script&quot;,select:&quot;form&quot;,textarea:&quot;form&quot;,style:&quot;style&quot;,table:&quot;table&quot;,tbody:&quot;table&quot;,td:&quot;table&quot;,tfoot:&quot;table&quot;,th:&quot;table&quot;,tr:&quot;table&quot;}),f=function(){u.call(this),this.addRules({attributes:[{include:&quot;space&quot;},{token:&quot;entity.other.attribute-name&quot;,regex:&quot;[-_a-zA-Z0-9:]+&quot;},{token:&quot;keyword.operator.separator&quot;,regex:&quot;=&quot;,push:[{include:&quot;space&quot;},{token:&quot;string&quot;,regex:&quot;[^&lt;&gt;=&#39;\&quot;`\\s]+&quot;,next:&quot;pop&quot;},{token:&quot;empty&quot;,regex:&quot;&quot;,next:&quot;pop&quot;}]},{include:&quot;string&quot;}],tag:[{token:function(e,t){var n=a[t];return[&quot;meta.tag.punctuation.begin&quot;,&quot;meta.tag.name&quot;+(n?&quot;.&quot;+n:&quot;&quot;)]},regex:&quot;(&lt;)([-_a-zA-Z0-9:]+)&quot;,next:&quot;start_tag_stuff&quot;},{token:function(e,t){var n=a[t];return[&quot;meta.tag.punctuation.begin&quot;,&quot;meta.tag.name&quot;+(n?&quot;.&quot;+n:&quot;&quot;)]},regex:&quot;(&lt;/)([-_a-zA-Z0-9:]+)&quot;,next:&quot;end_tag_stuff&quot;}],start_tag_stuff:[{include:&quot;attributes&quot;},{token:&quot;meta.tag.punctuation.end&quot;,regex:&quot;/?&gt;&quot;,next:&quot;start&quot;}],end_tag_stuff:[{include:&quot;space&quot;},{token:&quot;meta.tag.punctuation.end&quot;,regex:&quot;&gt;&quot;,next:&quot;start&quot;}]}),this.embedTagRules(s,&quot;css-&quot;,&quot;style&quot;),this.embedTagRules(o,&quot;js-&quot;,&quot;script&quot;),this.constructor===f&amp;&amp;this.normalizeRules()};r.inherits(f,u),t.HtmlHighlightRules=f}),ace.define(&quot;ace/mode/behaviour/html&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/behaviour/xml&quot;,&quot;ace/mode/behaviour/cstyle&quot;,&quot;ace/token_iterator&quot;],function(e,t,n){function a(e,t){var n=e.type.split(&quot;.&quot;);return t.split(&quot;.&quot;).every(function(e){return n.indexOf(e)!==-1})}var r=e(&quot;../../lib/oop&quot;),i=e(&quot;../behaviour/xml&quot;).XmlBehaviour,s=e(&quot;./cstyle&quot;).CstyleBehaviour,o=e(&quot;../../token_iterator&quot;).TokenIterator,u=[&quot;area&quot;,&quot;base&quot;,&quot;br&quot;,&quot;col&quot;,&quot;command&quot;,&quot;embed&quot;,&quot;hr&quot;,&quot;img&quot;,&quot;input&quot;,&quot;keygen&quot;,&quot;link&quot;,&quot;meta&quot;,&quot;param&quot;,&quot;source&quot;,&quot;track&quot;,&quot;wbr&quot;],f=function(){this.inherit(i),this.add(&quot;autoclosing&quot;,&quot;insertion&quot;,function(e,t,n,r,i){if(i==&quot;&gt;&quot;){var s=n.getCursorPosition(),f=new o(r,s.row,s.column),l=f.getCurrentToken();if(l&amp;&amp;a(l,&quot;string&quot;)&amp;&amp;f.getCurrentTokenColumn()+l.value.length&gt;s.column)return;var c=!1;if(!l||!a(l,&quot;meta.tag&quot;)&amp;&amp;(!a(l,&quot;text&quot;)||!l.value.match(&quot;/&quot;))){do l=f.stepBackward();while(l&amp;&amp;(a(l,&quot;string&quot;)||a(l,&quot;keyword.operator&quot;)||a(l,&quot;entity.attribute-name&quot;)||a(l,&quot;text&quot;)))}else c=!0;if(!l||!a(l,&quot;meta.tag.name&quot;)||f.stepBackward().value.match(&quot;/&quot;))return;var h=l.value;if(c)var h=h.substring(0,s.column-l.start);if(u.indexOf(h)!==-1)return;return{text:&quot;&gt;&lt;/&quot;+h+&quot;&gt;&quot;,selection:[1,1]}}})};r.inherits(f,i),t.HtmlBehaviour=f}),ace.define(&quot;ace/mode/folding/html&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/folding/mixed&quot;,&quot;ace/mode/folding/xml&quot;,&quot;ace/mode/folding/cstyle&quot;],function(e,t,n){var r=e(&quot;../../lib/oop&quot;),i=e(&quot;./mixed&quot;).FoldMode,s=e(&quot;./xml&quot;).FoldMode,o=e(&quot;./cstyle&quot;).FoldMode,u=t.FoldMode=function(){i.call(this,new s({area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1,li:1,dt:1,dd:1,p:1,rt:1,rp:1,optgroup:1,option:1,colgroup:1,td:1,th:1}),{&quot;js-&quot;:new o,&quot;css-&quot;:new o})};r.inherits(u,i)}),ace.define(&quot;ace/mode/folding/mixed&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/folding/fold_mode&quot;],function(e,t,n){var r=e(&quot;../../lib/oop&quot;),i=e(&quot;./fold_mode&quot;).FoldMode,s=t.FoldMode=function(e,t){this.defaultMode=e,this.subModes=t};r.inherits(s,i),function(){this.$getMode=function(e){typeof e!=&quot;string&quot;&amp;&amp;(e=e[0]);for(var t in this.subModes)if(e.indexOf(t)===0)return this.subModes[t];return null},this.$tryMode=function(e,t,n,r){var i=this.$getMode(e);return i?i.getFoldWidget(t,n,r):&quot;&quot;},this.getFoldWidget=function(e,t,n){return this.$tryMode(e.getState(n-1),e,t,n)||this.$tryMode(e.getState(n),e,t,n)||this.defaultMode.getFoldWidget(e,t,n)},this.getFoldWidgetRange=function(e,t,n){var r=this.$getMode(e.getState(n-1));if(!r||!r.getFoldWidget(e,t,n))r=this.$getMode(e.getState(n));if(!r||!r.getFoldWidget(e,t,n))r=this.defaultMode;return r.getFoldWidgetRange(e,t,n)}}.call(s.prototype)}),ace.define(&quot;ace/mode/markdown_highlight_rules&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/lib/lang&quot;,&quot;ace/mode/text_highlight_rules&quot;,&quot;ace/mode/javascript_highlight_rules&quot;,&quot;ace/mode/xml_highlight_rules&quot;,&quot;ace/mode/html_highlight_rules&quot;,&quot;ace/mode/css_highlight_rules&quot;],function(e,t,n){function c(e,t){return{token:&quot;support.function&quot;,regex:&quot;^```&quot;+e+&quot;\\s*$&quot;,push:t+&quot;start&quot;}}var r=e(&quot;../lib/oop&quot;),i=e(&quot;../lib/lang&quot;),s=e(&quot;./text_highlight_rules&quot;).TextHighlightRules,o=e(&quot;./javascript_highlight_rules&quot;).JavaScriptHighlightRules,u=e(&quot;./xml_highlight_rules&quot;).XmlHighlightRules,a=e(&quot;./html_highlight_rules&quot;).HtmlHighlightRules,f=e(&quot;./css_highlight_rules&quot;).CssHighlightRules,l=function(e){return&quot;(?:[^&quot;+i.escapeRegExp(e)+&quot;\\\\]|\\\\.)*&quot;},h=function(){a.call(this),this.$rules.start.unshift({token:&quot;empty_line&quot;,regex:&quot;^$&quot;,next:&quot;allowBlock&quot;},{token:&quot;markup.heading.1&quot;,regex:&quot;^=+(?=\\s*$)&quot;},{token:&quot;markup.heading.2&quot;,regex:&quot;^\\-+(?=\\s*$)&quot;},{token:function(e){return&quot;markup.heading.&quot;+e.length},regex:/^#{1,6}(?=\s*[^ #]|\s+#.)/,next:&quot;header&quot;},c(&quot;(?:javascript|js)&quot;,&quot;jscode-&quot;),c(&quot;xml&quot;,&quot;xmlcode-&quot;),c(&quot;html&quot;,&quot;htmlcode-&quot;),c(&quot;css&quot;,&quot;csscode-&quot;),{token:&quot;support.function&quot;,regex:&quot;^```\\s*[a-zA-Z]*(?:{.*?\\})?\\s*$&quot;,next:&quot;githubblock&quot;},{token:&quot;string&quot;,regex:&quot;^&gt;[ ].+$&quot;,next:&quot;blockquote&quot;},{token:&quot;constant&quot;,regex:&quot;^ {0,2}(?:(?: ?\\* ?){3,}|(?: ?\\- ?){3,}|(?: ?\\_ ?){3,})\\s*$&quot;,next:&quot;allowBlock&quot;},{token:&quot;markup.list&quot;,regex:&quot;^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+&quot;,next:&quot;listblock-start&quot;},{include:&quot;basic&quot;}),this.addRules({basic:[{token:&quot;constant.language.escape&quot;,regex:/\\[\\`*_{}\[\]()#+\-.!]/},{token:&quot;support.function&quot;,regex:&quot;(`+)(.*?[^`])(\\1)&quot;},{token:[&quot;text&quot;,&quot;constant&quot;,&quot;text&quot;,&quot;url&quot;,&quot;string&quot;,&quot;text&quot;],regex:&#39;^([ ]{0,3}\\[)([^\\]]+)(\\]:\\s*)([^ ]+)(\\s*(?:[&quot;][^&quot;]+[&quot;])?(\\s*))$&#39;},{token:[&quot;text&quot;,&quot;string&quot;,&quot;text&quot;,&quot;constant&quot;,&quot;text&quot;],regex:&quot;(\\[)(&quot;+l(&quot;]&quot;)+&quot;)(\\]s*\\[)(&quot;+l(&quot;]&quot;)+&quot;)(\\])&quot;},{token:[&quot;text&quot;,&quot;string&quot;,&quot;text&quot;,&quot;markup.underline&quot;,&quot;string&quot;,&quot;text&quot;],regex:&quot;(\\[)(&quot;+l(&quot;]&quot;)+&quot;)(\\]\\()&quot;+&#39;((?:[^\\)\\s\\\\]|\\\\.|\\s(?=[^&quot;]))*)&#39;+&#39;(\\s*&quot;&#39;+l(&#39;&quot;&#39;)+&#39;&quot;\\s*)?&#39;+&quot;(\\))&quot;},{token:&quot;string&quot;,regex:&quot;([*]{2}|[_]{2}(?=\\S))(.*?\\S[*_]*)(\\1)&quot;},{token:&quot;string&quot;,regex:&quot;([*]|[_](?=\\S))(.*?\\S[*_]*)(\\1)&quot;},{token:[&quot;text&quot;,&quot;url&quot;,&quot;text&quot;],regex:&quot;(&lt;)((?:https?|ftp|dict):[^&#39;\&quot;&gt;\\s]+|(?:mailto:)?[-.\\w]+\\@[-a-z0-9]+(?:\\.[-a-z0-9]+)*\\.[a-z]+)(&gt;)&quot;}],allowBlock:[{token:&quot;support.function&quot;,regex:&quot;^ {4}.+&quot;,next:&quot;allowBlock&quot;},{token:&quot;empty&quot;,regex:&quot;&quot;,next:&quot;start&quot;}],header:[{regex:&quot;$&quot;,next:&quot;start&quot;},{include:&quot;basic&quot;},{defaultToken:&quot;heading&quot;}],&quot;listblock-start&quot;:[{token:&quot;support.variable&quot;,regex:/(?:\[[ x]\])?/,next:&quot;listblock&quot;}],listblock:[{token:&quot;empty_line&quot;,regex:&quot;^$&quot;,next:&quot;start&quot;},{token:&quot;markup.list&quot;,regex:&quot;^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+&quot;,next:&quot;listblock-start&quot;},{include:&quot;basic&quot;,noEscape:!0},{defaultToken:&quot;list&quot;}],blockquote:[{token:&quot;empty_line&quot;,regex:&quot;^\\s*$&quot;,next:&quot;start&quot;},{token:&quot;string&quot;,regex:&quot;.+&quot;}],githubblock:[{token:&quot;support.function&quot;,regex:&quot;^```&quot;,next:&quot;start&quot;},{token:&quot;support.function&quot;,regex:&quot;.+&quot;}]}),this.embedRules(o,&quot;jscode-&quot;,[{token:&quot;support.function&quot;,regex:&quot;^```&quot;,next:&quot;pop&quot;}]),this.embedRules(a,&quot;htmlcode-&quot;,[{token:&quot;support.function&quot;,regex:&quot;^```&quot;,next:&quot;pop&quot;}]),this.embedRules(f,&quot;csscode-&quot;,[{token:&quot;support.function&quot;,regex:&quot;^```&quot;,next:&quot;pop&quot;}]),this.embedRules(u,&quot;xmlcode-&quot;,[{token:&quot;support.function&quot;,regex:&quot;^```&quot;,next:&quot;pop&quot;}]),this.normalizeRules()};r.inherits(h,s),t.MarkdownHighlightRules=h}),ace.define(&quot;ace/mode/folding/markdown&quot;,[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;,&quot;ace/lib/oop&quot;,&quot;ace/mode/folding/fold_mode&quot;,&quot;ace/range&quot;],function(e,t,n){var r=e(&quot;../../lib/oop&quot;),i=e(&quot;./fold_mode&quot;).FoldMode,s=e(&quot;../../range&quot;).Range,o=t.FoldMode=function(){};r.inherits(o,i),function(){this.foldingStartMarker=/^(?:[=-]+\s*$|#{1,6} |`{3})/,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);return this.foldingStartMarker.test(r)?r[0]==&quot;`&quot;?e.bgTokenizer.getState(n)==&quot;start&quot;?&quot;end&quot;:&quot;start&quot;:&quot;start&quot;:&quot;&quot;},this.getFoldWidgetRange=function(e,t,n){function l(t){return f=e.getTokens(t)[0],f&amp;&amp;f.type.lastIndexOf(c,0)===0}function h(){var e=f.value[0];return e==&quot;=&quot;?6:e==&quot;-&quot;?5:7-f.value.search(/[^#]/)}var r=e.getLine(n),i=r.length,o=e.getLength(),u=n,a=n;if(!r.match(this.foldingStartMarker))return;if(r[0]==&quot;`&quot;){if(e.bgTokenizer.getState(n)!==&quot;start&quot;){while(++n&lt;o){r=e.getLine(n);if(r[0]==&quot;`&quot;&amp;r.substring(0,3)==&quot;```&quot;)break}return new s(u,i,n,0)}while(n--&gt;0){r=e.getLine(n);if(r[0]==&quot;`&quot;&amp;r.substring(0,3)==&quot;```&quot;)break}return new s(n,r.length,u,0)}var f,c=&quot;markup.heading&quot;;if(l(n)){var p=h();while(++n&lt;o){if(!l(n))continue;var d=h();if(d&gt;=p)break}a=n-(!f||[&quot;=&quot;,&quot;-&quot;].indexOf(f.value[0])==-1?1:2);if(a&gt;u)while(a&gt;u&amp;&amp;/^\s*$/.test(e.getLine(a)))a--;if(a&gt;u){var v=e.getLine(a).length;return new s(u,i,a,v)}}}}.call(o.prototype)})</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.06107s from github-fe134-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-8lNGMbHKa/EMfv/nP5eGzB+zQm8mdKkVGUl4ZLZkgoI=" src="https://assets-cdn.github.com/assets/frameworks-f2534631b1ca6bf10c7effe73f9786cc1fb3426f2674a91519497864b6648282.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-jgzaQtqXpiadF/MEMhyGV6NHmMpb1SPYSVkXdTER4OA=" src="https://assets-cdn.github.com/assets/github-8e0cda42da97a6269d17f304321c8657a34798ca5bd523d8495917753111e0e0.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

