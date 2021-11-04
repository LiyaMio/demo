package main

import (
	"github.com/gin-gonic/gin"
	"mapweb/send"
	"net/http"
)


func main() {
	r := gin.Default()
	r.LoadHTMLGlob("HTML/*")
	r.StaticFS("/views",http.Dir("./views/"))
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK,"new map.html",nil)
	})
	//r.GET("/", func(c *gin.Context) {
	//	c.HTML(http.StatusOK,"test.html",nil)
	//})

	//r.GET("/dataTime.json",func(dataTime*gin.Context){
	//	te:=send.Testt()
	//	fmt.Println(te)
	//	dataTime.JSON(http.StatusOK,gin.H{"data":te})
	//})


	r.GET("/data1", func(c *gin.Context) {
		c.HTML(http.StatusOK,"1.html",nil)
	})
	r.GET("/data",func(c* gin.Context){
		//c.HTML(http.StatusOK, "newmap.html", nil)
		//datas:=send.Readnew()
		datas:=send.Try()
		c.JSON(http.StatusOK,gin.H{
			"data":datas,
		})
	})

	//r.GET("/json2",func(c* gin.Context){
	//	pa:=send.Gett()
	//	c.JSON(http.StatusOK,gin.H{"pa": pa})
	//})
	r.Run(":8090")
}
