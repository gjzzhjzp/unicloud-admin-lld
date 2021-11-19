// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "bannerfile": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "array"
      },
      {
        "arrayType": "file"
      }
    ],
    "label": "图片文件"
  },
  "open_url": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "跳转地址"
  },
  "title": {
    "rules": [
      {
        "format": "string"
      },
      {
        "maxLength": 20
      }
    ],
    "label": "标题"
  },
  "sort": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "排序"
  },
  "type": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "value": 0,
            "text": "首页"
          },
          {
            "value": 1,
            "text": "俊哲"
          },
          {
            "value": 2,
            "text": "山总"
          }
        ]
      }
    ],
    "defaultValue": 0,
    "label": "类型"
  },
  "status": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "defaultValue": true,
    "label": "生效状态"
  },
  "description": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "备注"
  }
}

const enumConverter = {
  "type_valuetotext": {
    "0": "首页",
    "1": "俊哲",
    "2": "山总"
  }
}

function filterToWhere(filter, command) {
  let where = {}
  for (let field in filter) {
    let { type, value } = filter[field]
    switch (type) {
      case "search":
        if (typeof value === 'string' && value.length) {
          where[field] = new RegExp(value)
        }
        break;
      case "select":
        if (value.length) {
          let selectValue = []
          for (let s of value) {
            selectValue.push(command.eq(s))
          }
          where[field] = command.or(selectValue)
        }
        break;
      case "range":
        if (value.length) {
          let gt = value[0]
          let lt = value[1]
          where[field] = command.and([command.gte(gt), command.lte(lt)])
        }
        break;
      case "date":
        if (value.length) {
          let [s, e] = value
          let startDate = new Date(s)
          let endDate = new Date(e)
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
      case "timestamp":
        if (value.length) {
          let [startDate, endDate] = value
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
    }
  }
  return where
}

export { validator, enumConverter, filterToWhere }
