package send

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"strconv"
	"strings"
)
type Datas struct{
	Name string   `json:"name"`
	X1 []float64  `json:"longitude"`
	Y1 []float64  `json:"latitude"`
}
var datas Datas
func Read() Datas{
	datas.Name="数据集"
	for i := 1; i <= 100; i++ {
		c := fmt.Sprintf("%s%05d%s", "./normal./normal_", i, ".csv")
		fmt.Println(c)

		f, err := os.Open(c)
		if err != nil {
			fmt.Println(err)
		}
		var a, b float64
		defer f.Close()
		buff := bufio.NewReader(f)
		for {
			line, err := buff.ReadString('\n')
			if err == io.EOF {
				break
			}
			tmp := strings.Split(line, ",")
			a, _ = strconv.ParseFloat(tmp[0], 64)
			//string([]byte(tmp[1])[:len(tmp[1]) - 2])
			b, _ = strconv.ParseFloat(strings.Split(tmp[1], "\r\n")[0], 64)
			datas.X1 = append(datas.X1, a)
			datas.Y1 = append(datas.Y1, b)
		}
		//fmt.Println()
		//for _, v := range datas.X1 {
		//	fmt.Println(v)
		//}
		//for _, v := range datas.Y1 {
		//	fmt.Println(v)
		//}

	}
	return datas
}
