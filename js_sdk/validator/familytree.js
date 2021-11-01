
// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema



const validator = {
  "nation": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "defaultValue": "汉族",
    "label": "民族"
  },
  "name": {
    "rules": [
      {
        "required": true
      },
      {
        "format": "string"
      },
      {
        "minLength": 2
      }
    ],
    "label": "姓名"
  },
  "parent_id": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "父节点"
  },
  "parent_relationship": {
    "rules": [
      {
        "format": "string"
      },
      {
        "range": [
          {
            "text": "子女",
            "value": "parent"
          },
          {
            "text": "配偶",
            "value": "partner"
          }
        ]
      }
    ],
    "label": "与父节点的关系"
  },
  "parent_partner_id": {
    "rules": [
      {
        "format": "string"
      }
    ]
  },
  "gender": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "text": "男",
            "value": 1
          },
          {
            "text": "女",
            "value": 2
          }
        ]
      }
    ],
    "defaultValue": 1,
    "label": "性别"
  },
  "birthyear": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "出生年份"
  },
  "dieyear": {
    "rules": [
      {
        "format": "int"
      }
    ],
    "label": "死亡年份"
  },
  "birthlocation": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "出生地点"
  },
  "finallocation": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "最后地点"
  },
  "idcard": {
    "rules": [
      {
        "format": "string"
      },
      {
        "format": "idcard"
      }
    ],
    "label": "身份证号"
  },
  "policital_status": {
    "rules": [
      {
        "format": "string"
      },
      {
        "range": [
          {
            "text": "群众",
            "value": "群众"
          },
          {
            "text": "党员",
            "value": "党员"
          }
        ]
      }
    ],
    "defaultValue": "群众",
    "label": "政治面貌"
  },
  "school": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "毕业学校"
  },
  "education": {
    "rules": [
      {
        "format": "string"
      },
      {
        "range": [
          {
            "text": "博士后",
            "value": "博士后"
          },
          {
            "text": "博士",
            "value": "博士"
          },
          {
            "text": "硕士",
            "value": "硕士"
          },
          {
            "text": "本科",
            "value": "本科"
          },
          {
            "text": "大专",
            "value": "大专"
          },
          {
            "text": "高中",
            "value": "高中"
          },
          {
            "text": "中专",
            "value": "中专"
          },
          {
            "text": "初中",
            "value": "初中"
          },
          {
            "text": "小学",
            "value": "小学"
          },
          {
            "text": "无",
            "value": "无"
          }
        ]
      }
    ],
    "label": "学历"
  },
  "professional_title": {
    "rules": [
      {
        "format": "string"
      },
      {
        "range": [
          {
            "value": "无",
            "text": "无"
          },
          {
            "value": "正高级",
            "text": "正高级"
          },
          {
            "value": "副高级",
            "text": "副高级"
          },
          {
            "value": "中级",
            "text": "中级"
          },
          {
            "value": "初级",
            "text": "初级"
          }
        ]
      }
    ],
    "label": "职称"
  },
  "company": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "工作单位"
  },
  "worktitle": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "职务"
  },
  "resume": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "简历"
  },
  "photo_person": {
    "rules": [
      {
        "format": "file"
      }
    ],
    "label": "个人照片"
  },
  "photo_family": {
    "rules": [
      {
        "format": "file"
      }
    ],
    "label": "家庭照片"
  },
  "comment": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "备注"
  }
}

const enumConverter = {
  "parent_relationship_valuetotext": {
    "parent": "子女",
    "partner": "配偶"
  },
  "gender_valuetotext": {
    "1": "男",
    "2": "女"
  },
  "policital_status_valuetotext": {
    "群众": "群众",
    "党员": "党员"
  },
  "education_valuetotext": {
    "博士后": "博士后",
    "博士": "博士",
    "硕士": "硕士",
    "本科": "本科",
    "大专": "大专",
    "高中": "高中",
    "中专": "中专",
    "初中": "初中",
    "小学": "小学",
    "无": "无"
  },
  "professional_title_valuetotext": {
    "无": "无",
    "正高级": "正高级",
    "副高级": "副高级",
    "中级": "中级",
    "初级": "初级"
  }
}

export { validator, enumConverter }
