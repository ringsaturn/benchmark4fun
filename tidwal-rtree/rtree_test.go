package tidwalrtree_test

import (
	"math/rand"
	"testing"

	"github.com/tidwall/cities/k100"
	"github.com/tidwall/rtree"
)

var tr rtree.RTreeG[int]

func init() {
	for index, item := range k100.Cities {
		tr.Insert([2]float64{item.Longitude, item.Latitude}, [2]float64{item.Longitude, item.Latitude}, index)
	}
}

func BenchmarkTidwalRTreeNearby(b *testing.B) {
	for i := 0; i < b.N; i++ {
		n := rand.Int() % len(k100.Cities)
		item := k100.Cities[n]
		tr.Search([2]float64{item.Longitude - 3, item.Latitude - 3}, [2]float64{item.Longitude + 3, item.Latitude + 3}, func(min, max [2]float64, data int) bool {
			return true
		})
	}
}
