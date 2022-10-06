package mmcloughlingeohash_test

import (
	"testing"

	"github.com/mmcloughlin/geohash"
)

func BenchmarkMmcloughlinGeoHashEncode(b *testing.B) {
	for i := 0; i < b.N; i++ {
		_ = geohash.Encode(116.3883, 39.9289)
	}
}
