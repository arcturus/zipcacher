importScripts('../bower_components/serviceworkerware/dist/sww.js');
importScripts('../dist/zipcacher.js');

var worker = new self.ServiceWorkerWare();

worker.use(new ZipCacher('http://localhost:8000/demo/resources.zip'));
worker.use(new self.SimpleOfflineCache());
worker.init();