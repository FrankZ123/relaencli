class Dbtype{
    static mysql = {
        "tinyint":{"js":"int","ts":"number"},
        "smallint":{"js":"int","ts":"number"},
        "mediumint":{"js":"int","ts":"number"},
        "bigint":{"js":"int","ts":"number"},
        "integer":{"js":"int","ts":"number"},
        "int":{"js":"int","ts":"number"},
        "float":{"js":"float","ts":"number"},
        "double":{"js":"double","ts":"number"},
        "decimal":{"js":"double","ts":"number"},
        "number":{"js":"double","ts":"number"},
        "numeric":{"js":"double","ts":"number"},
        "real":{"js":"double","ts":"number"},
    
        "year":{"js":"date","ts":"string"},
        "datetime":{"js":"date","ts":"string"},
        "timestamp":{"js":"date","ts":"string"},
        "date":{"js":"date","ts":"string"},
        "time":{"js":"date","ts":"string"},
        
        "varchar":{"js":"string","ts":"string"},
        "char":{"js":"string","ts":"string"},
        "tinyblob":{"js":"string","ts":"string","length":256},
        "mediumblog":{"js":"string","ts":"string"},
        "longblog":{"js":"string","ts":"string"},
        "blob":{"js":"string","ts":"string"},
        "longtext":{"js":"string","ts":"string"},
        "text":{"js":"string","ts":"string"},
        
        "varbinary":{"js":"string","ts":"string"}
    }
}

export {Dbtype}