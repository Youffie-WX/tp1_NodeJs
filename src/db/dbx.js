import mysqlx from '@mysql/xdevapi';

/* Utilisez cette classe si vous avez des problèmes de connection sur MySQL 8 avec le client mysql node.js de base
Vous aurez besoin d'installer la dépendances: npm install @mysql/xdevapi --save --save-exact
*/
class DbConnection {

  // Utilisez vos propres identifiants / schema pour la BDD
  constructor() {
    this.client = mysqlx.getClient({
        host: 'localhost',
        password: 'root',
        user: 'root',
        schema: 'exercice_final_node',
        port: 33060
    });
  }

  performQuery(request, values=[]) {
    return new Promise((resolve, reject) => {
      console.warn(request);

      this.client.getSession().then(session => {
          let metaD;
          const rows = [];
          const sql = session.sql(request).bind(values);
          sql.execute(result => {
            const normalizedResultObject = {};
            for (let i = 0; i<metaD.length; i++) {
                normalizedResultObject[metaD[i].name] = result[i];
            }
            rows.push(normalizedResultObject);
          }, meta => {
              metaD = meta;
          }).then( () => {
            resolve({ rows });
          });
      });
    });
  }

  close() {
  }

}

export default DbConnection;