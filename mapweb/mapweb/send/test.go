package send

type Test struct{
	T1 []float64  `json:"x"`
	T2 []float64  `json:"y"`
}
var te Test
func Testt()Test{

	var j float64
	j=0
	for i := 0; i < 5; i++ {
		te.T1=append(te.T1,1+j)
		te.T2=append(te.T2,1+j)
		j=j+1
	}
	return te
}