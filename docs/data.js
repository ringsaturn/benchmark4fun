window.BENCHMARK_DATA = {
  "lastUpdate": 1664984238827,
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
      },
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
          "id": "e69c1c5b16728ba1a8db3f967bd395b17dd87b77",
          "message": "set cron",
          "timestamp": "2022-10-05T23:36:48+08:00",
          "tree_id": "a778182f194b0324a944d2f7b59304d1b2db5965",
          "url": "https://github.com/ringsaturn/benchmark4fun/commit/e69c1c5b16728ba1a8db3f967bd395b17dd87b77"
        },
        "date": 1664984238466,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkGenTile",
            "value": 106.8,
            "unit": "ns/op",
            "extra": "11218774 times\n2 procs"
          },
          {
            "name": "BenchmarkGenHex",
            "value": 1112,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkFormatFmt",
            "value": 184.1,
            "unit": "ns/op",
            "extra": "6559779 times\n2 procs"
          },
          {
            "name": "BenchmarkFormatNaive",
            "value": 50.02,
            "unit": "ns/op",
            "extra": "23002683 times\n2 procs"
          }
        ]
      }
    ]
  }
}