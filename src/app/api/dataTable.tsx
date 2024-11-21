export const clusteredIndexTable: any[] = [
  {
    Feature: "Speed",
    Clustered: "Fast",
    NonClustered: "Slow",
  },
  {
    Feature: "Memory Usage",
    Clustered: "Requires less memory",
    NonClustered: "Requires more memory",
  },
  {
    Feature: "Data Storage",
    Clustered: "Main data is the clustered index itself ",
    NonClustered: "Index is a copy of data",
  },
  {
    Feature: "Number of Indexes Allowed",
    Clustered: "Only one per table ",
    NonClustered: "Multiple per table",
  },
  {
    Feature: "Disk Storage",
    Clustered: "Stores data on disk",
    NonClustered: "Does not inherently store data on disk",
  },
  {
    Feature: "Storage Structure",
    Clustered: "Stores pointers to blocks, not data",
    NonClustered: "Stores both values and pointers to data",
  },
  {
    Feature: "Leaf Nodes",
    Clustered: "Actual data in leaf nodes",
    NonClustered: "Leaf nodes may contain included columns, not data",
  },
  {
    Feature: "Order Definition",
    Clustered: "Clustered key defines order in the table",
    NonClustered: "Index key defines order in the index",
  },
  {
    Feature: "Physical Order of Rows",
    Clustered: "Matches order of the clustered index",
    NonClustered: "Does not necessarily match physical order on disk",
  },
  {
    Feature: "Size",
    Clustered: "Large",
    NonClustered: "Comparatively smaller (fornon clustered index)",
  },
  {
    Feature: "Default for Primary Keys",
    Clustered: "Primary keys are clustered indexes by default",
    NonClustered:
      "Composite keys with unique constraints act as non-clustered indexes",
  },
];
