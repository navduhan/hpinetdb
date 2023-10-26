// This is going to be a general template for downloading as CSV.

export const downloadCsv = (data, tid) => {
    const csvPrefix = "data:text/csv;charset=utf-8,";
    var csvString = [];
    if (tid === "interolog") {
      csvString = [
        [
          "Host Protein",
          "Pathogen Protein",
          "Interactor A",
          "Interactor B",
          "Interaction Source",
          "Interaction Method",
          "Interaction Type",
          "Interaction Confidence",
          "Pubmed ID",
        ],
        ...data.map((item) => [
          item.Host_Protein,
          item.Pathogen_Protein,
          item.ProteinA,
          item.ProteinB,
          item.intdb_x,
          item.Method,
          item.Type,
          item.Confidence,
          item.PMID,
        ]),
      ]
        .map((e) => e.join(","))
        .join("\n");
      //  console.log(csvString);
    }

    if (tid === "domain") {
      csvString = [
        [
          "Host Protein",
          "Pathogen Protein",
          "Interactor A",
          "Interactor B",
          "Interaction Source",
          "InteractorA Name",
          "InteractorA InterPro",
          "InteractorB Name",
          "InteractorB InterPro",
          "Interaction Confidence",
          
        ],
        ...data.map((item) => [
          item.Host_Protein,
          item.Pathogen_Protein,
          item.ProteinA,
          item.ProteinB,
          item.intdb,
          item.DomainA_name,
          item.DomainA_interpro,
          item.DomainB_name,
          item.DomainB_interpro,
          item.Score,
          
        ]),
      ]
        .map((e) => e.join(","))
        .join("\n");
      //  console.log(csvString);
    }
    if (tid === "gosim") {
      csvString = [
        [
          "Host Protein",
          "Pathogen Protein",
          "Host GO Terms",
          "Pathogen Go Terms",
          "Score"
        ],
        ...data.map((item) => [
          item.Host_Protein,
          item.Pathogen_Protein,
          item.Host_GO,
          item.Pathogen_GO,
          item.Score,
          
        ]),
      ]
        .map((e) => e.join(","))
        .join("\n");
      //  console.log(csvString);
    }
    if (tid === "phylo") {
      csvString = [
        [
          "Host Protein",
          "Pathogen Protein",
          "Score",
          "Host Pattern",
          "Pathogen Pattern",
        ],
        ...data.map((item) => [
          item.Host_Protein,
          item.Pathogen_Protein,
          item.Score,
          item.Host_Pattern,
          item.Pathogen_Pattern,  
        ]),
      ]
        .map((e) => e.join(","))
        .join("\n");
      //  console.log(csvString);
    }
  
    let csvData = csvPrefix + csvString;
  
    const encodedUri = encodeURI(csvData);
    // window.open(encodedUri);
  
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
  
    link.click();
  };