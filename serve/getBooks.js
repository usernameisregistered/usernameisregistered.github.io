const getBook = require("./getBook")
const { STATUS } = require("./common/constants")
module.exports = async function getBooks(bookList) {
    const result = {
        success: [],
        fail: []
    }
    const size = bookList.length
    for (let i = 0; i < size; i++) {
        const bookInfo =  await getBook(i, size, bookList[i]);
        if (bookInfo.status === STATUS.SUCCESS) {
            result.success.push({
                path: bookInfo.path
            })
        } else {
            result.fail.push({
                path: bookInfo.path,
                message: bookInfo.message
            })
        }
    }
    return result;
}