package send


type Datatry struct{
	X float64 `json:"longitude"`
	Y float64 `json:"latitude"`
}
var datatry[] Datatry=make([]Datatry,0,1000)

func Try() []Datatry{

	var point Datatry
	point.X=47.6149
	point.Y=-122.1941
	datatry=append(datatry,point)
	point.X=46.6149
	point.Y=-122.1941
	datatry=append(datatry,point)
	point.X=45.6149
	point.Y=-122.1941
	datatry=append(datatry,point)



	return datatry
}
