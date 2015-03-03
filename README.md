zipcacher
=========

# Intro

middleware for [](ServiceWorkerWare), a ServiceWorkers abstraction that works in Chrome (Canary) and Firefox (Nightly).

zipcacher will allow you to specify content to be cached from a zip file during the ServiceWorker installation phase.

# Usage

```
var worker = new self.ServiceWorkerWare();

worker.use(new ZipCacher('http://example.com/resources.zip'));
```

Will automatically catch all the content (and subfolders), following the origin `http://example.com/`, so all your resources will be accessible from that origin.

# Demo
Execute:

```
npm install
gulp javascript
gulp webserver
```

Access the following url: `http://localhost:8000/demo/index.html`

There is a `resources.zip` file on the demo directory that contains the two images linked from the `index.html` page. That means, that content is precached during installation and then served from the cache.