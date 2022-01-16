// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "title": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "标题"
  },
  "categories": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "value": 0,
            "text": "闲聊"
          },
          {
            "value": 1,
            "text": "磕糖"
          },
          {
            "value": 2,
            "text": "分享"
          },
          {
            "value": 3,
            "text": "其他"
          }
        ]
      }
    ],
    "defaultValue": 0,
    "label": "分类"
  },
  "article_status": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "value": 0,
            "text": "锁定"
          },
          {
            "value": 1,
            "text": "启用"
          }
        ]
      }
    ],
    "defaultValue": 0,
    "label": "文章状态"
  },
  "resources": {
    "rules": [
      {
        "format": "array"
      },
      {
        "arrayType": "file"
      }
    ],
    "label": "附件资源"
  },
  "last_modify_date": {
    "rules": [
      {
        "format": "timestamp"
      }
    ],
    "defaultValue": {
      "$env": "now"
    },
    "label": "最后修改时间"
  },
  "excerpt": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "详情"
  },
  "is_recommend": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "value": 0,
            "text": "不推荐"
          },
          {
            "value": 1,
            "text": "推荐"
          }
        ]
      }
    ],
    "defaultValue": 0,
    "label": "是否推荐"
  },
  "is_off": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "value": 0,
            "text": "不下架"
          },
          {
            "value": 1,
            "text": "下架"
          }
        ]
      }
    ],
    "defaultValue": 0,
    "label": "是否下架"
  }
}

const enumConverter = {
  "categories_valuetotext": {
    "0": "闲聊",
    "1": "磕糖",
    "2": "分享",
    "3": "其他"
  },
  "article_status_valuetotext": {
    "0": "锁定",
    "1": "启用"
  },
  "is_recommend_valuetotext": {
    "0": "不推荐",
    "1": "推荐"
  },
  "is_off_valuetotext": {
    "0": "不下架",
    "1": "下架"
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
