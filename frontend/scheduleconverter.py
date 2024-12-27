import pandas as pd
import json

def excel_to_json(excel_file, sheet_name, output_file):
    # Read the Excel file
    df = pd.read_excel(excel_file, sheet_name=sheet_name)
    
    # Convert datetime objects to strings
    df = df.applymap(lambda x: x.strftime('%Y-%m-%d') if isinstance(x, pd.Timestamp) else x)
    
    # Convert DataFrame to a list of dictionaries (records)
    data = df.to_dict(orient='records')
    
    # Write to JSON file
    with open(output_file, 'w') as json_file:
        json.dump(data, json_file, indent=4)
    
    print(f"JSON file saved to {output_file}")

# Example usage
excel_to_json('2024_DPBL_Schedule.xlsx', sheet_name='Schedule', output_file='schedule-data.json')
