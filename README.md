# 城市空间立体诊断展示系统

打开 `index.html` 即可进入主页面。若浏览器限制直接打开本地 HTML，建议在此文件夹运行：

```bash
python3 -m http.server 8000
```

随后访问 `http://localhost:8000`。

本网站包含四张交互地图及对应详情页：

- `map_gvi.html`：平视绿视率（31,514 个采样点）
- `map_ols.html`：OLS 回归标准残差（292 个 TPU 单元）
- `map_service.html`：0–5、5–10、10–15 分钟慢行服务区
- `map_accessibility.html`：就业机会点与服务区可达性

注意：OLS.geojson 与 SAA.geojson 原始坐标系分别为 EPSG:2326 和 EPSG:32650；网页生成时已转换至 WGS84（EPSG:4326），未改动桌面原始数据。
