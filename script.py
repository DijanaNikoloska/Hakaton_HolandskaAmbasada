import os
import json

# The path to the local folder where your JSON files are stored
LOCAL_FOLDER_PATH = 'jSON'  # Replace with the actual path

# Step 1: Get the list of JSON files from the specified local folder
def get_json_files_from_local_folder(folder_path):
    json_files = []
    # Walk through the folder and check for .json files
    for root, dirs, file_names in os.walk(folder_path):
        for file_name in file_names:
            if file_name.endswith('.json'):
                file_path = os.path.join(root, file_name)
                json_files.append({
                    'file_path': file_path,
                    'file_name': file_name
                })
    return json_files

# Step 2: Read the content of each JSON file
def read_json_content(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

# Step 3: Create db.json that includes the content from all JSON files
def create_db_json(json_files):
    db_structure = {}

    for json_file in json_files:
        file_content = read_json_content(json_file['file_path'])
        # Store content under the filename (without .json) as key
        file_key = os.path.splitext(json_file['file_name'])[0]  # Remove the .json extension
        db_structure[file_key] = file_content

    # Step 4: Write to db.json
    with open('db.json', 'w') as json_file:
        json.dump(db_structure, json_file, indent=4)

# Main function to integrate everything
def main():
    # Get JSON files from the local folder
    json_files = get_json_files_from_local_folder(LOCAL_FOLDER_PATH)

    if not json_files:
        print(f"No JSON files found in the specified folder: {LOCAL_FOLDER_PATH}")
    else:
        print(f"Found {len(json_files)} JSON files in the folder.")
        create_db_json(json_files)
        print("db.json has been created successfully!")

if __name__ == '__main__':
    main()
