window.addEventListener('load', function () {
  var key = location.pathname.split('/').pop().replace('map_', '').replace('.html', '');
  var images = {gvi:'gvi-final.jpg', ols:'ols-final.jpg', service:'service-final.jpg', accessibility:'accessibility-final.jpg'};
  Object.keys(window).forEach(function (name) {
    var map = window[name];
    if (!window.L || !(map instanceof L.Map)) return;
    map.eachLayer(function (layer) {
      if (!(layer instanceof L.TileLayer)) return;
      layer.on('tileerror', function () {
        if (document.getElementById('tile-warning')) return;
        map.removeLayer(layer);
        var box = document.createElement('div');
        box.id = 'tile-warning';
        box.style.cssText = 'position:fixed;top:12px;left:60px;right:12px;z-index:10000;background:#102039;color:white;padding:12px;border-radius:8px;font:14px sans-serif';
        box.appendChild(document.createTextNode('底图暂时无法加载，分析图层仍可使用。'));
        var link = document.createElement('a');
        link.href = 'assets/' + images[key];
        link.target = '_blank';
        link.textContent = ' 查看完整成图';
        link.style.color = '#40c4ff';
        box.appendChild(link);
        document.body.appendChild(box);
      });
    });
  });
});
