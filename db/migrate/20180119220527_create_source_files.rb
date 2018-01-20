class CreateSourceFiles < ActiveRecord::Migration[5.1]
  def change
    create_table :source_files do |t|
      t.string :filename
      t.string :content
      t.string :language
      t.references :review_request, foreign_key: true

      t.timestamps
    end
  end
end
