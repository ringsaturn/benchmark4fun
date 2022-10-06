package mmcloughlingeohash_test

import (
	"testing"

	"github.com/mmcloughlin/geohash"
)

func BenchmarkMmcloughlinGeoHashEncode(b *testing.B) {
	for i := 0; i < b.N; i++ {
		_ = geohash.Encode(39.9289, 116.3883)
	}
}

func BenchmarkGenHashAndGetAllNeighbors(b *testing.B) {
	for i := 0; i < b.N; i++ {
		func() {
			gh := geohash.EncodeIntWithPrecision(39.9289, 116.3883, 12)
			_ = geohash.NeighborsIntWithPrecision(gh, 12)
		}()
	}
}
