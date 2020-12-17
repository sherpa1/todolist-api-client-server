class Todo {
  final int id;
  final String title;
  final String content;
  final bool done;
  final DateTime deadline;

  Todo(this.id, this.title, this.content, this.done, this.deadline);

  factory Todo.fromJson(Map<Object, dynamic> json) {
    try {
      Todo t = new Todo(json['id'], json['title'], json['content'],
          json['done'], json['deadline']);

      return t;
    } catch (e) {
      print(e);
      return null;
    }
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'content': content,
        'done': done,
        'deadline': deadline
      };
}
