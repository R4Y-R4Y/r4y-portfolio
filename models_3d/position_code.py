import bpy

def position_objects_in_grid(rows, spacing_x):
    i = 0    
    for obj in bpy.data.objects:
            x = (i % rows) * spacing_x
            y = (i // rows) * spacing_x
            
            location = (x, y, 0)  # You can adjust the Z-coordinate if needed
            
            # Set the location for the object
            obj.location = location
            # Increment object counter
            i += 1

# Set the grid parameters (adjust as needed)
rows = 25
spacing_x = 10  # Adjust the spacing between objects
# Ensure the number of objects in the scene matches the grid size
obj_count = len(bpy.context.scene.objects)
if obj_count < rows * rows:
    position_objects_in_grid(rows, spacing_x)    
else:
    # Run the function to position objects in a grid
    print("Error: Not enough objects in the scene.")

