window.BENCHMARK_DATA = {
  "lastUpdate": 1664984635136,
  "repoUrl": "https://github.com/ringsaturn/benchmark4fun",
  "entries": {
    "Go Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ringsaturn.me@gmail.com",
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "committer": {
            "email": "ringsaturn.me@gmail.com",
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "distinct": true,
          "id": "f5d5f5451ed3d6393a366c0ff7138a49c5969c4a",
          "message": "rename",
          "timestamp": "2022-10-05T23:43:12+08:00",
          "tree_id": "a9d165ad06f99138cc57a2466377f981784f1c2c",
          "url": "https://github.com/ringsaturn/benchmark4fun/commit/f5d5f5451ed3d6393a366c0ff7138a49c5969c4a"
        },
        "date": 1664984634138,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkOrbMaptileGenTile",
            "value": 113.3,
            "unit": "ns/op",
            "extra": "10657267 times\n2 procs"
          },
          {
            "name": "BenchmarkUberH3GenHex",
            "value": 1371,
            "unit": "ns/op",
            "extra": "841827 times\n2 procs"
          },
          {
            "name": "BenchmarkUberH3FormatFmt",
            "value": 252,
            "unit": "ns/op",
            "extra": "4921676 times\n2 procs"
          },
          {
            "name": "BenchmarkUberH3FormatNaive",
            "value": 68.71,
            "unit": "ns/op",
            "extra": "17922799 times\n2 procs"
          }
        ]
      }
    ]
  }
}