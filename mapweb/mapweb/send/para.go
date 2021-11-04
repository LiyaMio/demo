package send

type Para struct{
	T1 float64            `json:"time1"`                      //对比时间
	T2 float64            `json:"time2"`
	T3 float64            `json:"time3"`
	C1 float64            `json:"Calculation quantity1"`      //运算量
	C2 float64     		  `json:"Calculation quantity2"`
	C3 float64            `json:"Calculation quantity3"`
	K1 float64            `json:"Key length1"`                //密钥长度
	K2 float64            `json:"Key length2"`
	K3 float64            `json:"Key length3"`
	S1 float64            `json:"Similarity1"`                //相似度
	S2 float64            `json:"Similarity2"`
	S3 float64            `json:"Similarity3"`
}
var pa Para
func Gett()Para{
	pa.T1=1.00
	pa.T2=1.20
	pa.T3=1.30
	pa.C1=2.001
	pa.C2=2.202
	pa.C3=2.303
	pa.K1=3.00
	pa.K2=3.01
	pa.K3=3.02
	pa.S1=4.022
	pa.S2=4.1234
	pa.S3=2.564
	return pa
}
//范佑往里填