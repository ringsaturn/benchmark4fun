package uberh3id_test

import (
	"fmt"
	"testing"

	"github.com/uber/h3-go/v3"
)

func BenchmarkUberH3GenHex(b *testing.B) {
	for i := 0; i < b.N; i++ {
		func() {
			geo := h3.GeoCoord{
				Latitude:  37.775938728915946,
				Longitude: -122.41795063018799,
			}
			resolution := 9
			_ = h3.FromGeo(geo, resolution)
		}()
	}
}

func BenchmarkUberH3GenHexAndGetNeighbors(b *testing.B) {
	for i := 0; i < b.N; i++ {
		func() {
			geo := h3.GeoCoord{
				Latitude:  37.775938728915946,
				Longitude: -122.41795063018799,
			}
			resolution := 12
			hex := h3.FromGeo(geo, resolution)
			_ = h3.KRing(hex, 1)
		}()
	}
}

func BenchmarkUberH3FormatFmt(b *testing.B) {
	geo := h3.GeoCoord{
		Latitude:  37.775938728915946,
		Longitude: -122.41795063018799,
	}
	resolution := 9
	item := h3.FromGeo(geo, resolution)
	for i := 0; i <= b.N; i++ {
		_ = fmt.Sprintf("%x", item)
	}
}

func BenchmarkUberH3FormatNaive(b *testing.B) {
	geo := h3.GeoCoord{
		Latitude:  37.775938728915946,
		Longitude: -122.41795063018799,
	}
	resolution := 9
	item := h3.FromGeo(geo, resolution)
	for i := 0; i <= b.N; i++ {
		_ = h3.ToString(item)
	}
}
