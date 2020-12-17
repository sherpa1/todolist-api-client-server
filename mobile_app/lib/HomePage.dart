import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import './models/Todo.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String _endpoint =
      "http://1fab0e299304.ngrok.io"; //url provided by Ngrok available during 8h, update it when launching local API
  Dio _dio;
  List _todos = <Todo>[];
  String _error = "";

  bool _todosAreLoaded = false;

  _MyHomePageState() {
    _dio = Dio();
  }

  Future<void> _loadTodos() async {
    Response _response;

    String url = _endpoint + '/todos';

    try {
      _response = await _dio.get(url);

      if (_response.statusCode == 200) {
        setState(() {
          for (var i = 0; i < _response.data.length; i++) {
            Todo todo = Todo.fromJson(_response.data[i]);
            _todos.add(todo);
          }
          _error = "";
          _todosAreLoaded = true;
        });
      } else {
        setState(() {
          _error = "An error has occured";
          _todosAreLoaded = false;
        });
      }
    } catch (e) {
      setState(() {
        _error = e.toString();
        _todosAreLoaded = false;
      });
    }
  }

  Widget _buildTodoPreview(Todo todo) {
    return ListTile(
      title: Text(todo.title),
    );
  }

  Widget _buildTodoList() {
    if (_todosAreLoaded && _error != '') {
      return _getError();
    } else if (_todosAreLoaded && _error == '') {
      return ListView.builder(
          padding: EdgeInsets.all(16.0),
          itemCount: _todos.length,
          itemBuilder: (context, i) {
            return _buildTodoPreview(_todos[i]);
          });
    } else {
      return Container();
    }
  }

  Widget _getButton() {
    return (_todosAreLoaded)
        ? Container()
        : FloatingActionButton(
            onPressed: _loadTodos,
            tooltip: 'Load data',
            child: Icon(Icons.refresh),
          );
  }

  Widget _getError() {
    return (_error == '') ? Container() : Text(_error);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: _buildTodoList(),
        floatingActionButton:
            _getButton() // This trailing comma makes auto-formatting nicer for build methods.
        );
  }
}
