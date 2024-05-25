
    // Sample data
    var data = [
    { tool1: "Git", tool2: "GitHub", tool3: "GitLab" },
    { tool1: "XML", tool2: "json", tool3: "YAML" },
    { tool1: "ElectronJS", tool2: "EmguCV", tool3: "AForge" },
    { tool1: "jsp tomcat", tool2: "swing", tool3: "nano" },
    { tool1: "Microsoft SQL Server", tool2: "JetBrains", tool3: "vscode" },
    { tool1: "GNU/LINUX", tool2: "Powershell", tool3: "antlr" },
    ];

    // Function to render the table
    function renderTable(data) {
    var tbody = document.querySelector("#myTable tbody");
    tbody.innerHTML = ""; // Clear existing tbody

    data.forEach(function(row) {
    var tr = document.createElement("tr");
    tr.innerHTML = `
                <td>${row.tool1}</td>
                <td>${row.tool2}</td>
                <td>${row.tool3}</td>
            `;
    tbody.appendChild(tr);
});
}

    // Initial rendering
    renderTable(data);
