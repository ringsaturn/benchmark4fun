package orbmaptile_test

import (
	"testing"

	"github.com/paulmach/orb"
	"github.com/paulmach/orb/maptile"
)

func BenchmarkGenTile(b *testing.B) {
	for i := 0; i < b.N; i++ {
		func() {
			_ = maptile.At(orb.Point{116.3883, 39.9289}, maptile.Zoom(7))
		}()
	}
}
