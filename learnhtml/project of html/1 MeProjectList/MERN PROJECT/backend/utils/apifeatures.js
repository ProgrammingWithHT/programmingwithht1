
class ApiFeatures {
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword ? 
        {
            name:{
                $regex:this.queryStr.keyword,
                $options: "$i",
            }
        } : {};

        // console.log(keyword)

        this.query = this.query.find(keyword);
        return this
    }

    filter () {
        // const queryCopy = this.queryStr  // not write that's way because in js all object is passed by reference so any change in queryCopy also change the value of queryStr
        const queryCopy = {...this.queryStr}

        // Removing some fields fro category
        const removeFields = ["keyword", "page", "limit"];

        removeFields.forEach(key => delete queryCopy[key])
        console.log("before : ",queryCopy)
        let queryStr = JSON.stringify(queryCopy);
        console.log("After : ",queryCopy)
        
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`)
        console.log("After then : ",queryStr)
        

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
        
    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerPage * (currentPage -1 );
        this.query = this.query.limit(resultPerPage).skip(skip);

        return this;
    }

}

module.exports = ApiFeatures