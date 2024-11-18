import SqlDisplay from "../component/ui/sql_display";
import { TextBold, TitleBold } from "../component/ui/text-bold";
import { ReviewKnowledgeViewModel } from "../models/Blogs";

export const backendQuestion: ReviewKnowledgeViewModel[] = [
  {
    id: 1,
    title: "What are the different languages present in DBMS?",
    answer: (
      <>
        <TitleBold className="mb-5">
          The four types of DBMS languages are as follows:
        </TitleBold>
        <ul className="list-disc space-y-4">
          <li>
            <TextBold>Data Manipulation Language (DML)</TextBold> : It is used
            to manipulate the data and consists of the command for the same.
            E.g.: SELECT, INSERT, DELETE, UPDATE, etc.
          </li>
          <li>
            <TextBold>Data Definition Language (DDL)</TextBold> : It is used to
            define and update the data. E.g.: TRUNCATE, ALTER, DROP, CREATE,
            RENAME, etc.
          </li>
          <li>
            <TextBold>Data Control Language (DCL)</TextBold> : It is used to
            control the access to the data. E.g.: GRANT, REVOKE, etc.
          </li>
          <li>
            <TextBold>Transaction Control Language (TCL)</TextBold> : It is used
            to handle the data transactions. E.g.: COMMIT, ROLLBACK, etc.
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
        <TitleBold className="mb-5">
          ACID properties are a set of properties that ensure reliable and
          secure transactions among databases. To maintain data consistency,
          ACID properties are followed. ACID stands for Atomicity, Consistency,
          Isolation, Durability.
        </TitleBold>
        <ul className="list-disc space-y-4">
          <li>
            <TextBold>Atomicity</TextBold> : Either the entire transaction takes
            place at once or not at all.
          </li>
          <li>
            <TextBold>Consistency</TextBold> : The database must be consistent
            before and after a transaction
          </li>
          <li>
            <TextBold>Isolation</TextBold> : No other transaction can alter the
            data during a transaction is in progress
          </li>
          <li>
            <TextBold>Durability</TextBold> : The transactions made should be
            durable and must persist
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
        <TitleBold className="mb-5">
          Normalization is the technique that reduces data redundancy and
          eliminates insertion, updation and deletion anomalies. Normalization
          is the process of dividing the larger table into smaller tables and
          linking them through relationships. It is the process of organizing
          data in a database.
        </TitleBold>
        <ul className="list-disc space-y-4">
          <li>
            <TextBold className="font-bold">Insertion Anomaly</TextBold>:
            Insertion Anomaly is when one cannot insert a new tuple into a
            relationship due to lack of data.N
          </li>
          <li>
            <TextBold className="font-bold">Deletion Anomaly</TextBold>: Delete
            anomaly is where the deletion of data results in the unintended loss
            of some other important data.N
          </li>
          <li>
            <TextBold className="font-bold">Updation Anomaly</TextBold>:
            Updation anomaly is when an update of a single data value requires
            multiple rows of data to be updated.
          </li>
        </ul>
        <TitleBold className=" my-5">
          Different types of normal forms:
        </TitleBold>
        <ul className="list-disc space-y-4">
          <li>
            <TextBold>1NF</TextBold>: It is known as the first normal form. A
            relation is said to be in 1NF if it contains an atomic value.
          </li>
          <li>
            <TextBold>2NF</TextBold>: It is known as the second normal form. A
            relation is said to be in 2NF if it is in 1NF and each non-prime
            attribute is fully functionally dependent on the primary key
          </li>
          <li>
            <TextBold>3NF</TextBold>: It is known as the third normal form. A
            relation is said to be in 3NF if it is in 2NF and there is no
            transitive dependency.
          </li>
          <li>
            <TextBold>BCNF</TextBold>: It is known as Boyce Codd Normal Form
            which is a strict version of 3NF. A relation is said to be in BCNF
            if it is in 3NF and for every functional dependency X-&gt;Y, X is a
            super key of the table. It is also called the 3.5 Normal Form.
          </li>
          <li>
            <TextBold>4NF</TextBold>: It is known as the fourth normal form. A
            relation is said to be in 4NF if it is in BCNF and there is no
            multivalued dependency in the table.
          </li>
          <li>
            <TextBold>5NF</TextBold>: It is known as the fifth normal form. A
            relation is said to be in 5NF if it is in 4NF and it cannot be
            further decomposed into smaller tables.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "What is an ER diagram?",
    answer: (
      <>
        <p className="mb-5">
          ER diagrams stand for Entity Relationship Diagram. It is a diagram
          that displays the different entities and the relationship among them
          stored inside the database.
        </p>
        <p className="mb-5">
          ER diagram provides a logical structure of the database. Creating an
          ER diagram for the database is a standardized procedure and is done
          before implementing the database.
        </p>
        <p className="mb-5">ER diagram is based on three concepts:</p>
        <ul className="list-disc space-y-4">
          <li>
            <TextBold>Entities</TextBold>: It can be defined as an object having
            some properties. They are represented using rectangles. Eg: Car
          </li>
          <li>
            <TextBold>Attributes</TextBold>: The properties of an entity are
            called attributes. They are represented using ellipses. Eg: Car
            name, car mileage, car type, etc
          </li>
          <li>
            <TextBold>Relationships</TextBold>: Relationships are how the
            entities are related to each other. They are represented using
            lines.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title:
      "Give the resulting tables arising from applying Joins on the following tables in SQL",
    answer: (
      <>
        <div>
          <TitleBold className="mt-0">Employees Table:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731747638/BlogImage/kjdosxkv4mprdqw73iug.png"
            alt=""
          />

          <TitleBold>Departments Table:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731747726/BlogImage/jwrg7d8yd0rjwi3eprjc.png"
            alt=""
          />
        </div>

        <div>
          <TitleBold>Inner Join:</TitleBold>
          <ul className="list-disc space-y-2">
            <li>Returns only the rows with matching values in both tables.</li>
            <li>Filters out rows with no match.</li>
          </ul>

          <TitleBold>SQL Query:</TitleBold>
          <SqlDisplay
            sqlQuery="SELECT employees.name, departments.department_name
            FROM employees
            INNER JOIN departments ON employees.department_id =departments.id;"
          />

          <TitleBold className="text-[#2cd659]">Output:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731749717/BlogImage/fuv25t5unw6go6a6bwgo.png"
            alt=""
          />
        </div>

        <div>
          <TitleBold>Left Join (Left Outer Join):</TitleBold>
          <ul className="list-disc space-y-2">
            <li>
              Returns all rows from the left table and the matched rows from the
              right table.
            </li>
            <li>
              If there is no match in the right table, NULL values are returned.
            </li>
          </ul>

          <TitleBold>SQL Query:</TitleBold>
          <SqlDisplay
            sqlQuery="SELECT employees.name, departments.department_name
            FROM employees
            LEFT JOIN departments ON employees.department_id =departments.id;"
          />

          <TitleBold className="text-[#2cd659]">Output:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731749717/BlogImage/fuv25t5unw6go6a6bwgo.png"
            alt=""
          />
        </div>

        <div>
          <TitleBold>Right Join (Right Outer Join):</TitleBold>
          <ul className="list-disc space-y-2">
            <li>
              Returns all rows from the right table and the matched rows from
              the left table.
            </li>
            <li>
              If there is no match in the left table, NULL values are returned.
            </li>
          </ul>

          <TitleBold>SQL Query:</TitleBold>
          <SqlDisplay
            sqlQuery="SELECT employees.name, departments.department_name
            FROM employees
            RIGHT JOIN departments ON employees.department_id =departments.id;"
          />

          <TitleBold className="text-[#2cd659]">Output:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731750187/BlogImage/gn9uyq7ox4hdnqurdl8l.png"
            alt=""
          />
        </div>

        <div>
          <TitleBold>Full Join (Full Outer Join):</TitleBold>
          <ul className="list-disc space-y-2">
            <li>
              Returns all rows when there is a match in either the left or right
              table.
            </li>
            <li>
              Includes rows with no match in either table with NULL values.
            </li>
          </ul>

          <TitleBold>SQL Query:</TitleBold>
          <SqlDisplay
            sqlQuery="SELECT employees.name, departments.department_name
          FROM employees
          FULL OUTER JOIN departments ON employees.department_id = departments.id;"
          />

          <TitleBold className="text-[#2cd659]">Output:</TitleBold>
          <img
            src="https://res.cloudinary.com/dg9a4e1uw/image/upload/v1731750187/BlogImage/gn9uyq7ox4hdnqurdl8l.png"
            alt=""
          />
        </div>

        <div>
          <TitleBold>Other Types of JOIN: </TitleBold>
          <p className="mb-5">
            Apart from INNER JOIN and OUTER JOIN, there are some other types of
            JOIN that are less commonly used:
          </p>
          <ul className="list-disc space-y-2">
            <li>
              <TextBold>SELF JOIN</TextBold>: A table is joined with itself.
            </li>
            <li>
              <TextBold>NATURAL JOIN</TextBold>: Similar to INNER JOIN, but it
              does not require specifying the condition with ON. Instead, it
              automatically links based on matching column names. NATURAL JOIN
              is supported in PostgreSQL.
            </li>
            <li>
              <TextBold>LEFT JOIN EXCLUDE / RIGHT JOIN EXCLUDE</TextBold>:
              Performs a LEFT JOIN or RIGHT JOIN but excludes the INNER JOIN
              portion. In practice, these are not separate types of JOIN; you
              can easily achieve this by adding a WHERE Key IS NULL condition to
              filter out common records.
            </li>
            <li>
              <TextBold>FULL JOIN EXCLUDE</TextBold>: Performs a FULL JOIN and
              excludes the INNER JOIN portion. This is handled similarly to the
              types above.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 6,
    title: "What is statelessness in REST?",
    answer: (
      <>
        <p className="mb-5">
          In <TextBold>REST (Representational State Transfer)</TextBold> ,
          statelessness is a fundamental architectural constraint. It means that
          each request from a client to a server must contain all the
          information needed to understand and process the request. The server
          should not rely on any information from previous requests or sessions
          stored on the server.
        </p>
        <p className="mb-5">
          This ensures that each request is independent and can be processed in
          isolation, making the system more scalable, reliable, and easier to
          maintain. Statelessness simplifies the communication between clients
          and servers, as there is no need for the server to store or manage the
          client's state between requests.
        </p>
        <p className="mb-5">
          Each request is self-contained, enhancing the overall flexibility and
          scalability of the RESTful system.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "What are Idempotent methods in REST? ",
    answer: (
      <>
        <p className="mb-5">
          Idempotent implies that the outcome of a single request remains the
          same, even if the request is called multiple times.
        </p>
        <p className="mb-5">
          In <TextBold>REST API</TextBold> design, it is crucial to create
          idempotent APIs to handle potential duplicate requests from consumers
          and ensure fault tolerance.
        </p>
        <p className="mb-5">
          <TextBold>REST</TextBold> inherently provides idempotent methods,
          which guarantee consistent responses regardless of the number of times
          a request is made.
        </p>
        <p className="mb-5">
          <TextBold>GET, OPTIONS, TRACE,</TextBold> and{" "}
          <TextBold>HEAD</TextBold>
          are idempotent as they are designed for resource retrieval without
          altering server resource states.
        </p>
        <p className="mb-5">
          <TextBold>PUT</TextBold> methods, used for resource updates, are
          idempotent because subsequent requests simply overwrite the same
          resource without changing its state.
        </p>
        <p className="mb-5">
          <TextBold>DELETE</TextBold> methods are considered idempotent since
          the first request successfully deletes the resource (Status Code 200).
        </p>
        <p className="mb-5">
          Subsequent <TextBold>DELETE</TextBold> requests return a Status Code
          204, indicating no change in server resources.
        </p>
        <p className="mb-5">
          <TextBold>DELETE</TextBold> may not be idempotent if it leads to
          multiple deletions of the same resource with each request (e.g.,{" "}
          <TextBold>DELETE</TextBold> /user/last).
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "What is CAP Theorem?",
    answer: (
      <>
        <p>
          The <TextBold>CAP theorem</TextBold> (Brewer's theorem) states that a
          distributed system or database can provide only two out of the
          following three properties:
        </p>

        <p>
          <TextBold>Consistency</TextBold>: Similar to ACID Properties,
          Consistency means that the state of the system before and after
          transactions should remain consistent.
        </p>
        <p>
          <TextBold>Availability</TextBold>: This states that resources should
          always be available, there should be a non-error response.
        </p>
        <p>
          <TextBold>Partition tolerance</TextBold>: Even when the network
          communication fails between the nodes in a cluster, the system should
          work well.
        </p>
        <p>
          By the CAP theorem, all of these three properties cannot be achieved
          at the same time.
        </p>
        <img
          src="https://edwardthienhoang.wordpress.com/wp-content/uploads/2020/05/9-1.png"
          alt=""
        />
      </>
    ),
  },
  {
    id: 9,
    title: "What is SQL injection? How can we prevent it?",
    answer: (
      <>
        <TitleBold>SQL Injection:</TitleBold>
        <p>
          SQL injection is a cyber attack where an attacker injects malicious
          SQL code into a website's input fields, exploiting vulnerabilities in
          the code. The aim is to manipulate the executed SQL query, gaining
          unauthorized access to, modifying, or deleting data, and potentially
          executing administrative operations on the database.
        </p>
        <TitleBold>Example:</TitleBold>
        <p>In a login form with the SQL query:</p>
        <SqlDisplay
          sqlQuery={
            "SELECT * FROM users WHERE username = 'input_username'AND password = 'input_password';"
          }
        />
        <p>An attacker might input:</p>
        <SqlDisplay sqlQuery={"input_username = 'admin' OR 1=1 --"} />
        <p>Resulting in:</p>
        <SqlDisplay sqlQuery="SELECT * FROM users WHERE username = 'admin' OR 1=1 --' AND password = 'input_password';" />
        <p>
          The double hyphen (-- ) comments out the rest of the query, allowing
          unauthorized access.
        </p>
        <TitleBold>Prevention</TitleBold>
        <ul className="list-decimal">
          <li>
            <TextBold>Input Validation</TextBold>
          </li>
          <li>
            <TextBold>Cautious Error Messages</TextBold>
          </li>
          <li>
            <TextBold>Logging and Monitoring</TextBold>
          </li>
          <li>
            <TextBold>Web Application Firewalls (WAFs)</TextBold>
          </li>
          <li>
            <TextBold>Security Audits</TextBold>
          </li>
        </ul>
      </>
    ),
  },
];
