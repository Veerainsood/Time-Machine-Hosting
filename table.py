from graphviz import Digraph

dot = Digraph(comment='Project Structure')

# Define Nodes
nodes = {
    "App": "Main Router handling navigation across the app",
    "3DForest": "Main hub for linking 3D modules to the canvas and managing object positions, sizes, shapes, etc.",
    "Components": "Core functional and rendering components",
    "Models": "3D Models for objects",
    "ChangeDayNight": "Day/Night cycle control",
    "FaunaGenerator": "Animal spawner",
    "FPV": "First-person view control",
    "Ground": "Ground environment",
    "TimeTravel": "Time travel logic",
    "ForestGenerator": "Forest rendering",
    "Navigation": "Navigation components",
    "Hooks": "Global app logic hooks",
    "Login": "User Authentication and Login flow",
    "Register": "Account registration",
    "SaveForest": "Educational game for sustainable future actions, with interactive gameplay",
    "StaticAssets": "Models, Textures, Images, CSS",
    "CompCSS": "Component-based styles",
    "Textures": "Texture files",
    "Cart": "Cart model",
    "HorseKart": "Horse cart model",
    "Deer": "Deer model",
    "Dog": "Dog model",
    "EntryCircle": "Navigation with links"
}

# Adding nodes to the graph
for node, desc in nodes.items():
    dot.node(node, f"{node}\n{desc}")

# Define Relationships
relationships = [
    ("App", "3DForest"),
    ("3DForest", "Components"),
    ("3DForest", "Models"),
    ("Components", "ChangeDayNight"),
    ("Components", "FaunaGenerator"),
    ("Components", "FPV"),
    ("Components", "Ground"),
    ("Components", "TimeTravel"),
    ("Components", "ForestGenerator"),
    ("Navigation", "Login"),
    ("Navigation", "Register"),
    ("StaticAssets", "CompCSS"),
    ("StaticAssets", "Textures"),
]

# Adding edges to represent relationships
for source, target in relationships:
    dot.edge(source, target)

# Save and render the graph
dot.render('project_structure', format='png', cleanup=True)
