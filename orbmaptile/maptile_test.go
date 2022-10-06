package orbmaptile_test

import (
	"testing"

	"github.com/paulmach/orb"
	"github.com/paulmach/orb/maptile"
)

func BenchmarkOrbMaptileGenTile(b *testing.B) {
	for i := 0; i < b.N; i++ {
		func() {
			_ = maptile.At(orb.Point{116.3883, 39.9289}, maptile.Zoom(7))
		}()
	}
}

func BenchmarkOrbMaptileGenTileAndGetAllNeighbors(b *testing.B) {
	for i := 0; i < b.N; i++ {
		func() {
			tile := maptile.At(orb.Point{116.3883, 39.9289}, maptile.Zoom(7))
			_ = []maptile.Tile{
				{
					X: tile.X - 1,
					Y: tile.Y - 1,
					Z: tile.Z,
				},
				{
					X: tile.X + 0,
					Y: tile.Y - 1,
					Z: tile.Z,
				},
				{
					X: tile.X + 1,
					Y: tile.Y - 1,
					Z: tile.Z,
				},
				{
					X: tile.X - 1,
					Y: tile.Y + 0,
					Z: tile.Z,
				},
				{
					X: tile.X + 0,
					Y: tile.Y + 0,
					Z: tile.Z,
				},
				{
					X: tile.X + 1,
					Y: tile.Y + 0,
					Z: tile.Z,
				},
				{
					X: tile.X - 1,
					Y: tile.Y + 1,
					Z: tile.Z,
				},
				{
					X: tile.X + 0,
					Y: tile.Y + 1,
					Z: tile.Z,
				},
				{
					X: tile.X + 1,
					Y: tile.Y + 1,
					Z: tile.Z,
				},
			}
		}()
	}
}
