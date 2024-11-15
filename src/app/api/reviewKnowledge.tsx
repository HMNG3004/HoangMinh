export const backendQuestion = [
  {
    id: 1,
    title: "What are the different languages present in DBMS?",
    answer: (
      <>
        <p className="font-bold mb-5">
          The four types of DBMS languages are as follows:
        </p>
        <ul className="list-disc space-y-4">
          <li>
            <span className="font-bold">Data Manipulation Language (DML)</span>{" "}
            : It is used to manipulate the data and consists of the command for
            the same. E.g.: SELECT, INSERT, DELETE, UPDATE, etc.
          </li>
          <li>
            <span className="font-bold">Data Definition Language (DDL)</span> :
            It is used to define and update the data. E.g.: TRUNCATE, ALTER,
            DROP, CREATE, RENAME, etc.
          </li>
          <li>
            <span className="font-bold">Data Control Language (DCL)</span> : It
            is used to control the access to the data. E.g.: GRANT, REVOKE, etc.
          </li>
          <li>
            <span className="font-bold">
              Transaction Control Language (TCL)
            </span>{" "}
            : It is used to handle the data transactions. E.g.: COMMIT,
            ROLLBACK, etc.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "What are ACID properties?",
    answer: (
      <>
        <p className="font-bold mb-5">
          ACID properties are a set of properties that ensure reliable and
          secure transactions among databases. To maintain data consistency,
          ACID properties are followed. ACID stands for Atomicity, Consistency,
          Isolation, Durability.
        </p>
        <ul className="list-disc space-y-4">
          <li>
            <span className="font-bold">Atomicity</span> : Either the entire
            transaction takes place at once or not at all.
          </li>
          <li>
            <span className="font-bold">Consistency</span> : The database must
            be consistent before and after a transaction
          </li>
          <li>
            <span className="font-bold">Isolation</span> : No other transaction
            can alter the data during a transaction is in progress
          </li>
          <li>
            <span className="font-bold">Durability</span> : The transactions
            made should be durable and must persist
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title:
      "What is normalization? Explain the different types of normal forms.",
    answer: (
      <>
        <p className="font-bold mb-5">
          Normalization is the technique that reduces data redundancy and
          eliminates insertion, updation and deletion anomalies. Normalization
          is the process of dividing the larger table into smaller tables and
          linking them through relationships. It is the process of organizing
          data in a database.
        </p>
        <ul className="list-disc space-y-4">
          <li>
            <span className="font-bold">Insertion Anomaly</span>: Insertion
            Anomaly is when one cannot insert a new tuple into a relationship
            due to lack of data.N
          </li>
          <li>
            <span className="font-bold">Deletion Anomaly</span>: Delete anomaly
            is where the deletion of data results in the unintended loss of some
            other important data.N
          </li>
          <li>
            <span className="font-bold">Updation Anomaly</span>: Updation
            anomaly is when an update of a single data value requires multiple
            rows of data to be updated.
          </li>
        </ul>
        <p className="font-bold my-5">Different types of normal forms:</p>
        <ul className="list-disc space-y-4">
          <li>
            <span className="font-bold">1NF</span>: It is known as the first
            normal form. A relation is said to be in 1NF if it contains an
            atomic value.
          </li>
          <li>
            <span className="font-bold">2NF</span>
            2NF: It is known as the second normal form. A relation is said to be
            in 2NF if it is in 1NF and each non-prime attribute is fully
            functionally dependent on the primary key
          </li>
          <li>
            <span className="font-bold">3NF</span>
            3NF: It is known as the third normal form. A relation is said to be
            in 3NF if it is in 2NF and there is no transitive dependency.
          </li>
          <li>
            <span className="font-bold">BCNF</span>: It is known as Boyce Codd
            Normal Form which is a strict version of 3NF. A relation is said to
            be in BCNF if it is in 3NF and for every functional dependency
            X-&gt;Y, X is a super key of the table. It is also called the 3.5
            Normal Form.
          </li>
          <li>
            <span className="font-bold">4NF</span>: It is known as the fourth
            normal form. A relation is said to be in 4NF if it is in BCNF and
            there is no multivalued dependency in the table.
          </li>
          <li>
            <span className="font-bold">5NF</span>: It is known as the fifth
            normal form. A relation is said to be in 5NF if it is in 4NF and it
            cannot be further decomposed into smaller tables.
          </li>
        </ul>
      </>
    ),
  },
];
