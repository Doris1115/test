function add()
{
  return {
    add: 'add'
  }
}

function del()
{
  return {
    del: 'del00'
  }
}

function update()
{
  var arr = []
  for (var i = 0; i < 10; i++)
  {
    arr.push('curr' + i)
  }
  return {
    updata: arr
  }
}