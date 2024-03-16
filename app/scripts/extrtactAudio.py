import ffmpeg
import subprocess
from math import ceil
import os

def extract_audio(input_file, output_file):
    (
        ffmpeg
        .input(input_file)
        .output(output_file, format='mp3')
        .run(overwrite_output=True)
    )

def split_mp3(input_file, output_folder, chunk_size_mb=25):
    # Calculate chunk size in bytes
    chunk_size_bytes = chunk_size_mb * 1024 * 1024

    # Create the output folder if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)

    # Get the duration of the input MP3 file
    probe = ffmpeg.probe(input_file)
    duration = float(probe['format']['duration'])

    # Calculate the number of chunks required
    num_chunks = int(ceil(os.path.getsize(input_file) / chunk_size_bytes))

    # Generate commands to split the file
    for i in range(num_chunks):
        start_time = i * (duration / num_chunks)
        end_time = min((i + 1) * (duration / num_chunks), duration)

        output_file = os.path.join(output_folder, f"chunk_{i+1}.mp3")

        ffmpeg.input(input_file, ss=start_time, to=end_time).output(output_file).run(overwrite_output=True)

    # Delete the input MP3 file
    os.remove(input_file)



input_file = "videos/test.mp4"
output_file = "output.mp3"
output_folder = "output_chunks"
extract_audio(input_file, output_file)
split_mp3(output_file, output_folder)