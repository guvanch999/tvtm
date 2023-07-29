const getFileExtension = function (filename: string | undefined) {
  if (filename) {
    let fileSplit = filename.split('.')
    return fileSplit[fileSplit.length - 1]
  }
  return ''
}


export = getFileExtension
