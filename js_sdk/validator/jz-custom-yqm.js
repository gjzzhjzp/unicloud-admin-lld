// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "user_name_type": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "value": 0,
            "text": "微博"
          },
          {
            "value": 1,
            "text": "抖音"
          }
        ]
      }
    ],
    "defaultValue": 0,
    "label": "账号平台"
  },
  "user_type": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "value": 0,
            "text": "资源"
          },
          {
            "value": 1,
            "text": "平台"
          }
        ]
      }
    ],
    "defaultValue": 0,
    "label": "使用状态"
  },
  "user_name": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "账号昵称"
  },
  "value": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "邀请码"
  },
  "status": {
    "rules": [
      {
        "format": "bool"
      }
    ],
    "defaultValue": false,
    "label": "生效状态"
  },
  "date": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "创建时间"
  }
}

const enumConverter = {
  "user_name_type_valuetotext": {
    "0": "微博",
    "1": "抖音"
  },
  "user_type_valuetotext": {
    "0": "资源",
    "1": "平台"
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
