import * as pgPromise from 'pg-promise';

export class ElefantSQLService {
    private pgp: any;
    private db: any
    protected static JDBC_HOST = "isabelle.db.elephantsql.com";
    protected static JDBC_PORT = "5432";
    protected static JDBC_USER = "zuzyxits";
    protected static JDBC_PASSWORD = "MUST SETUP";

    async executeSQL(sql: string){
  /*       const connectionConfig = {
            host: DatabaseConnector.JDBC_HOST,
            port: parseInt(DatabaseConnector.JDBC_PORT),
            database: DatabaseConnector.JDBC_DATABASE,
            user: DatabaseConnector.JDBC_USER,
            password: DatabaseConnector.JDBC_PASSWORD,
        }
        try {
            this.db = this.pgp(JDBC_HOST, )
            
        } catch (error) {
            
        } */
    }
    
    




  

}