---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Cities"
tags: ["rankings", "living-post"]
pubDate: 2025-03-04
archived: false
description: "Ranking the cities (and regions) I've spent nontrivial time in on the axes of tourism and livability."
---
## To Live In

<div class="rankings-container">
  <table class="rankings-table" data-rankings-table>
    <thead>
      <tr>
        <th class="item-column">Item</th>
        <th class="date-column" data-sort-date="2025-03-04">Mar 04, 2025</th>
        <th class="date-column active" data-sort-date="2025-04-02">Apr 02, 2025</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>New York City</th>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <th>San Francisco + The Bay</th>
        <td>2</td>
        <td>2</td>
      </tr>
      <tr>
        <th>Chicago</th>
        <td>3</td>
        <td>4</td>
      </tr>
      <tr>
        <th>London</th>
        <td>4</td>
        <td>3</td>
      </tr>
      <tr>
        <th>Cambridge, MA</th>
        <td>5</td>
        <td>8</td>
      </tr>
      <tr>
        <th>Paris</th>
        <td>6</td>
        <td>5</td>
      </tr>
      <tr>
        <th>Boston</th>
        <td>7</td>
        <td>9</td>
      </tr>
      <tr>
        <th>Manchester</th>
        <td>8</td>
        <td>10</td>
      </tr>
      <tr>
        <th>Zurich</th>
        <td>9</td>
        <td>11</td>
      </tr>
      <tr>
        <th>Florence</th>
        <td>10</td>
        <td>14</td>
      </tr>
      <tr>
        <th>Rome</th>
        <td>11</td>
        <td>15</td>
      </tr>
      <tr>
        <th>Freiburg</th>
        <td>12</td>
        <td>16</td>
      </tr>
      <tr>
        <th>Cinque Terre</th>
        <td>13</td>
        <td>17</td>
      </tr>
      <tr>
        <th>Madrid</th>
        <td></td>
        <td>12</td>
      </tr>
      <tr>
        <th>Barcelona</th>
        <td></td>
        <td>6</td>
      </tr>
      <tr>
        <th>South of France</th>
        <td></td>
        <td>13</td>
      </tr>
      <tr>
        <th>Monaco</th>
        <td></td>
        <td>7</td>
      </tr>
    </tbody>
  </table>
</div>

## To Visit

<div class="rankings-container">
  <table class="rankings-table" data-rankings-table>
    <thead>
      <tr>
        <th class="item-column">Item</th>
        <th class="date-column" data-sort-date="2025-03-04">Mar 04, 2025</th>
        <th class="date-column active" data-sort-date="2025-04-02">Apr 02, 2025</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>New York City</th>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <th>Paris</th>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <th>London</th>
        <td>3</td>
        <td>2</td>
      </tr>
      <tr>
        <th>San Francisco + The Bay</th>
        <td>4</td>
        <td>4</td>
      </tr>
      <tr>
        <th>Cinque Terre</th>
        <td>5</td>
        <td>8</td>
      </tr>
      <tr>
        <th>Florence</th>
        <td>6</td>
        <td>10</td>
      </tr>
      <tr>
        <th>Chicago</th>
        <td>7</td>
        <td>11</td>
      </tr>
      <tr>
        <th>Cambridge, MA</th>
        <td>8</td>
        <td>14</td>
      </tr>
      <tr>
        <th>Rome</th>
        <td>9</td>
        <td>12</td>
      </tr>
      <tr>
        <th>Zurich</th>
        <td>10</td>
        <td>13</td>
      </tr>
      <tr>
        <th>Manchester</th>
        <td>11</td>
        <td>15</td>
      </tr>
      <tr>
        <th>Boston</th>
        <td>12</td>
        <td>16</td>
      </tr>
      <tr>
        <th>Freiburg</th>
        <td>13</td>
        <td>17</td>
      </tr>
      <tr>
        <th>Madrid</th>
        <td></td>
        <td>9</td>
      </tr>
      <tr>
        <th>Barcelona</th>
        <td></td>
        <td>6</td>
      </tr>
      <tr>
        <th>South of France</th>
        <td></td>
        <td>5</td>
      </tr>
      <tr>
        <th>Monaco</th>
        <td></td>
        <td>7</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  .rankings-container {
    width: 100%;
    max-width: 800px;
    margin: 0rem auto;
    overflow-x: auto;
  }
  
  .rankings-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'sans': ['Hack'],;
  }
  
  .rankings-table th, .rankings-table td {
    padding: 0.75rem 1rem;
    text-align: center;
  }
  
  .rankings-table th {
    font-weight: 600;
    cursor: pointer;
    position: relative;
  }
  
  .rankings-table th:hover {
    background-color: #ff6b6b;
  }
  
  .rankings-table th.active {
    background-color: #ff6b6b;
  }
  
  .rankings-table th.active::after {
    content: "▼";
    margin-left: 0.5rem;
    font-size: 0.75rem;
  }
  
  .item-column {
    text-align: left !important;
    min-width: 120px;
  }
  
  .rankings-table tbody tr:hover {
    background-color: #ff6b6b;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const tables = document.querySelectorAll('table[data-rankings-table]');
    
    tables.forEach(table => {
      const headers = table.querySelectorAll('th.date-column');
      const tbody = table.querySelector('tbody');
      const defaultSortColumn = table.querySelector('th.active') || 
                               table.querySelector('th.date-column:last-child');
      
      if (defaultSortColumn) {
        defaultSortColumn.classList.add('active');
      }
      
      function sortTableByColumn(table, column, asc = true) {
        table.querySelectorAll('th').forEach(th => th.classList.remove('active'));
        column.classList.add('active');
        
        const columnIndex = Array.from(column.parentNode.children).indexOf(column);
        const rows = Array.from(tbody.querySelectorAll('tr'));
        
        const sortedRows = rows.sort((a, b) => {
          const aCellValue = a.children[columnIndex].innerText.trim();
          const bCellValue = b.children[columnIndex].innerText.trim();
          
          if (aCellValue === '' && bCellValue === '') return 0;
          if (aCellValue === '') return asc ? 1 : -1;
          if (bCellValue === '') return asc ? -1 : 1;
          
          return asc ? 
            parseInt(aCellValue) - parseInt(bCellValue) : 
            parseInt(bCellValue) - parseInt(aCellValue);
        });
        
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild);
        }
        sortedRows.forEach(row => tbody.appendChild(row));
      }
      

      headers.forEach(header => {
        header.addEventListener('click', () => {
          const isAscending = !header.classList.contains('active') || header.getAttribute('data-sort-dir') === 'desc';
          header.setAttribute('data-sort-dir', isAscending ? 'asc' : 'desc');
          sortTableByColumn(table, header, isAscending);
        });
      });
      
      if (defaultSortColumn) {
        sortTableByColumn(table, defaultSortColumn, true);
      }
    });
  });
</script>