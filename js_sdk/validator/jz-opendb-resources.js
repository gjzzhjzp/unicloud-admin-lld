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
  "author": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      }
    ],
    "label": "作者"
  },
  "categories": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "分类"
  },
  "categorieszw": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "分类中文"
  },
  "labels": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "标签"
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
  "avatar": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "file"
      }
    ],
    "label": "封面大图"
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
  "aliyun_dz": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "外链"
  },
  "excerpt": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "内容"
  },
  "is_grant": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "value": 0,
            "text": "未授权"
          },
          {
            "value": 1,
            "text": "已授权"
          }
        ]
      }
    ],
    "defaultValue": 0,
    "label": "是否授权"
  },
  "is_encryption": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "value": 0,
            "text": "不加密"
          },
          {
            "value": 1,
            "text": "加密"
          }
        ]
      }
    ],
    "defaultValue": 0,
    "label": "是否加密"
  }
}

const enumConverter = {
  "article_status_valuetotext": {
    "0": "锁定",
    "1": "启用"
  },
  "is_grant_valuetotext": {
    "0": "未授权",
    "1": "已授权"
  },
  "is_encryption_valuetotext": {
    "0": "不加密",
    "1": "加密"
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
