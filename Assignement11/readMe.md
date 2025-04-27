Repository Layer Design Justifications
1. ?? Use of a Generic Repository Interface
I created a base Repository interface using a class that defines common CRUD operations: save, findById, findAll, and delete. This allows us to:

Enforce a consistent API across all entity-specific repositories (e.g., User, JobPost, Application)

Promote code reusability and minimize duplication

Lay the groundwork for easily switching or extending storage backends

 �Used a generic base class to avoid duplicating CRUD logic across multiple repositories.�

2. ?? In-Memory Implementation with Map
I used JavaScript�s built-in Map object to simulate a HashMap-based in-memory data store. This implementation is ideal for development and testing because:

It provides fast O(1) access for CRUD operations

It allows unit tests to run without needing a real database

It simplifies debugging and prototyping

? �Used in-memory storage for fast prototyping and unit testing, with no external dependencies.�

3. Entity-Specific Repositories
Each domain entity (User, JobPost, Application) has its own repository class that extends the generic Repository. This allows us to:

Add specialized query methods later (e.g., findByEmail, findByCompany)

Keep the logic for each entity modular and easy to maintain

? �Created separate repositories per entity to support future domain-specific logic.�

4. Swappable Storage Backends
The repositories are designed to be storage-agnostic. In-memory versions are implemented now, but future versions (e.g., using file storage, SQL, or MongoDB) can easily replace them. This will be managed using a Factory Pattern or Dependency Injection in future iterations.

5. Factory Pattern Justification
The Factory Pattern was used to dynamically select between different repository implementations, ensuring clean separation of concerns and easy future extensibility.