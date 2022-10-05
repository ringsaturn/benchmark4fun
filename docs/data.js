window.BENCHMARK_DATA = {
  "lastUpdate": 1664984200990,
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
          "id": "3399af99d2aa59e57cdd38462b0ff2bd1b88b1d0",
          "message": "trigger ci",
          "timestamp": "2022-10-05T23:35:59+08:00",
          "tree_id": "af2d8eca553bf3049e7051fc6c51b4925d950cd6",
          "url": "https://github.com/ringsaturn/benchmark4fun/commit/3399af99d2aa59e57cdd38462b0ff2bd1b88b1d0"
        },
        "date": 1664984200186,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGenTile",
            "value": 115.5,
            "unit": "ns/op",
            "extra": "10137648 times\n2 procs"
          },
          {
            "name": "BenchmarkGenHex",
            "value": 1380,
            "unit": "ns/op",
            "extra": "816523 times\n2 procs"
          },
          {
            "name": "BenchmarkFormatFmt",
            "value": 242.1,
            "unit": "ns/op",
            "extra": "4773129 times\n2 procs"
          },
          {
            "name": "BenchmarkFormatNaive",
            "value": 69.51,
            "unit": "ns/op",
            "extra": "17549056 times\n2 procs"
          }
        ]
      }
    ]
  }
}