package pointinpolygon

import (
	"testing"

	"github.com/tidwall/geometry"
)

func BenchmarkPointInPoly(b *testing.B) {
	poly := geometry.NewPoly([]geometry.Point{
		{
			X: 90.48826291293898,
			Y: 45.951129815858565,
		},
		{
			X: 90.48826291293898,
			Y: 27.99437617512571,
		},
		{
			X: 122.83201291294,
			Y: 27.99437617512571,
		},
		{
			X: 122.83201291294,
			Y: 45.951129815858565,
		},
		{
			X: 90.48826291293898,
			Y: 45.951129815858565,
		},
	}, nil, geometry.NoIndexing)

	for i := 0; i < b.N; i++ {
		_ = poly.ContainsPoint(geometry.Point{X: 99.9804504129416, Y: 39.70716466970461})
	}
}
