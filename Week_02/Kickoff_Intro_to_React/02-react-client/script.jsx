const { createRoot } = ReactDOM;

function GeneratePageContent() {
  return (
    <div>
      <header>
        <a href="#" class="brand">
          React
        </a>
      </header>
    </div>
  );
}

// Step 1: Target the root, and create it as the root element for React
const root = createRoot(document.getElementById("root"));
// Step 2: Have React render everything in that root.
root.render(<GeneratePageContent />);
