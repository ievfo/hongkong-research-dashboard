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

